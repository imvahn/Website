import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ProjectDiv from "@/components/ProjectDiv";
import Section from "@/components/Section";

const code1 = `#!/usr/bin/python3
# VAHN KESSLER

# Modules
from bs4 import BeautifulSoup
import requests
import re
import pandas as pd
from timeit import default_timer as time

# Functions
def gatherData(soup):
    """
    Gather all the data from the website and return lists of the desired components.

    Returns
    -------
    title : BeautifulSoup list
        Title of every thesis.
    date : BeautifulSoup list
        Date for every thesis.
    author : string list
        Author for every thesis.
    advisor : string list
        Advisor(s) for every thesis.
    link : string list
        Link for every thesis (taken from title).
    length : int
        Length of the title list. Because every thesis has a title, this gives an accurate count of the amount of theses on each page.

    """
    # Patterns
    author_pattern = re.compile(r'Author: (.*)|Creator: (.*)')
    author2_pattern = re.compile(r'Author: (.*)')
    
    # Components
    title = soup.findAll("div", attrs={"class":"node__title"})
    length = len(title)
    date = soup.findAll("div", attrs={"class":"field__item","property":"dcterms:issued"})
    author = [
        author_pattern.search(div.text).group(1)
        for div in soup.findAll("div", attrs={"class": "field field--name-field-linked-agent field--type-typed-relation field--label-hidden field__items"})]
    advisor = [
        author2_pattern.sub('',div.text).replace('\\n','')
        for div in soup.findAll("div", attrs={"class": "field field--name-field-linked-agent field--type-typed-relation field--label-hidden field__items"})]
    for i in range(len(advisor)):
        print(i,advisor[i])
    link = [
        "https://digitalcollections.wesleyan.edu/"+link['href']
        for div in soup.findAll("div", attrs={"class":"node__title"}) for link in div.find_all('a')]
    
    return title, date, author, advisor, link, length

def assembleDatabase(title,date,author,advisor,link,length,dictionary):
    """
    Assemble the dictionary

    Parameters
    ----------
    title : BeautifulSoup list
        Title of every thesis.
    date : BeautifulSoup list
        Date for every thesis.
    author : string list
        Author for every thesis.
    advisor : string list
        Advisor(s) for every thesis.
    link : string list
        Link for every thesis (taken from title).
    length : int
        Amount of theses on the page.
    dictionary : dict
        Dictionary to be updated with data.

    Returns
    -------
    dictionary : dict
        Dictionary updated with data.

    """
    
    # Variables
    creator_pattern = re.compile(r'Creator: (.*)')
    key = 0
    t_number = 0
    d_number = 0
    au_number = 0
    ad_number = 0
    l_number = 0
    
    while key < (length - 1):
        # Specify relevant data
        t = title[t_number].text
        d = date[d_number].text
        au = author[au_number]
        ad = advisor[ad_number]
        l = link[l_number]
        
        # Add "N/A" for "Creator" case
        creator_match = creator_pattern.search(ad)
        if creator_match:
            d = "N/A"
            au = creator_match.group(1)
            ad = "ttttttttttttttttN/A" # 16 characters for slice
        
        # Update dictionary
        dictionary[key] = {'Title':t,"Author":au,"Advisor(s)":ad[16:],"Date":d,"Link":l} # ad[:16] to remove "Thesis advisor: "
        
        # Iterate through the component lists
        if not creator_match:
            key += 1
            t_number += 1
            d_number += 1
            au_number += 1
            ad_number += 1
            l_number += 1
        else: # Don't iterate date because if you do it'll be out of sync
            key += 1
            t_number += 1
            au_number += 1
            ad_number += 1
            l_number += 1    
            
    return dictionary

if __name__=='__main__':
    
    # Setup
    # page_to_scrape = requests.get("https://digitalcollections.wesleyan.edu/islandora/object/wesleyanct-etd_hon_theses?f%5B0%5D=discipline%3AChemistry&items_per_page=50&page=%1C1")
    page_to_scrape = requests.get("https://digitalcollections.wesleyan.edu/islandora/object/wesleyanct-etd_hon_theses?items_per_page=50&f%5B0%5D=discipline%3AEnglish&page=%2C1")
    soup = BeautifulSoup(page_to_scrape.text, "html.parser")
    
    start = time()
    # Gather data
    (title, date, author, advisor, link, length) = gatherData(soup)
    
    # Create dictionary
    thesis_dictionary = dict()
    
    # Assemble dictionary
    thesis_dictionary = assembleDatabase(title, date, author, advisor, link, length, thesis_dictionary)
    
    print(time()-start)
    
`;
const code2 = `#!/usr/bin/python3
# VAHN KESSLER
# Script optimized with list comprehension, pandas DataFrame, and parallelization with joblib

# Modules
from bs4 import BeautifulSoup
import requests
import re
import pandas as pd
from urllib.parse import unquote
from joblib import Parallel, delayed
from timeit import default_timer as time

def gatherData(soup):
    """
    Gather all the data from the website and return lists of the desired components.
    
    Parameters
    ----------
    soup : BeautifulSoup object
        Parsed webpage.
    
    Returns
    -------
    titles : string list
        Title of every thesis.
    dates : string list
        Date of every thesis.
    authors : string list
        Author of every thesis.
    advisors : string list
        Advisor(s) of every thesis.
    links : string list
        Link for every thesis (taken from title).
    """
    # Patterns
    author_pattern = re.compile(r'Author: (.*)|Creator: (.*)')
    author2_pattern = re.compile(r'Author: (.*)')
    
    # Components
    titles = [
        div.text
        for div in soup.findAll("div", attrs={"class":"node__title"})
    ]
    dates = [
        div.text
        for div in soup.findAll("div", attrs={"class":"field__item","property":"dcterms:issued"})
    ]
    authors = [
        author_pattern.search(div.text).group(1)
        for div in soup.findAll("div", attrs={"class": "field field--name-field-linked-agent field--type-typed-relation field--label-hidden field__items"})
    ]
    advisors = [
        author2_pattern.sub('',div.text).replace('\\n','')[16:] if not "Creator: " in div.text else div.text.replace('\\n','')
        for div in soup.findAll("div", attrs={"class": "field field--name-field-linked-agent field--type-typed-relation field--label-hidden field__items"})
    ]
    links = [
        "https://digitalcollections.wesleyan.edu/"+link['href']
        for div in soup.findAll("div", attrs={"class":"node__title"})
        for link in div.find_all('a')
    ]

    return titles, dates, authors, advisors, links

def fixLists(titles, dates, authors, advisors, links, soup):
    """
    Function to take care of exceptional cases

    Parameters
    ----------
    titles : string list
        Title of every thesis.
    dates : string list
        Date of every thesis.
    authors : string list
        Author of every thesis.
    advisors : string list
        Advisor(s) of every thesis.
    links : string list
        Link of every thesis.
    soup : BeautifulSoup object
        Parsed webpage.

    Returns
    -------
    dates : string list
        Date of every thesis.
    authors : string list
        Author of every thesis.
    advisors : string list
        Advisor(s) of every thesis.

    """

    # Variables
    length = len(titles)
    collection_list = []
    i = 0
    advisor_pattern = re.compile(r', \\d{4}-')
    
    # Logic for "items in Collection". Gets the titles so the loop knows where to insert data.
    collection = soup.findAll("div", attrs={"class":"view__collection-count views-row"})
    if len(collection) != 0:
        collection_parents = [
            c.parent.parent.parent.parent.parent for c in collection
        ]
        collection_titles = [
            cp.findAll("div", attrs={"class":"node__title"}) for cp in collection_parents
        ]
        for c in collection_titles:
            # Get rid of double list
            for a in c:
                collection_list.append(a.text)
                
        # Case for when "items in Collection" but thesis advisor and author are still listed
        collection_attributes = [
            cp.findAll("div", attrs={"class": "field field--name-field-linked-agent field--type-typed-relation field--label-hidden field__items"}) for cp in collection_parents
        ]
                
    # Parse through lists to make sure everything lines up
    while i < length:
        # Add "N/A" for "Creator" case
        if "Creator: " in advisors[i]:
            if len(dates) != length:
                dates.insert(i, "N/A")
            authors[i] = advisors[i][9:]
            advisors[i] = "N/A"

        # Account for multiple thesis advisors
        if "Thesis advisor: " in advisors[i]:
            advisors[i] = advisors[i].replace("Thesis advisor: ", " and ")

        # Account for ", 1960-" case (any 4 numbers)
        advisor_match = advisor_pattern.search(advisors[i])
        if advisor_match:
            advisors[i] = re.sub(advisor_pattern,'',advisors[i])

        # Account for "items in Collection" case
        for c in collection_list:
            if c == titles[i]:
                if collection_attributes[0] == []:
                    author, advisor = scrapeSubpage(links[i])
                    authors.insert(i, author)
                    advisors.insert(i, advisor)
        
        i += 1
            
    return dates, authors, advisors

def scrapeSubpage(page):
    """
    Function to scrape a page and identify the author and advisor in the event of an "items in Collection" case

    Parameters
    ----------
    page : string
        Page to scrape.

    Returns
    -------
    author[0] : string
        Author of the thesis.
    advisor[0] : string
        Advisor(s) of the thesis.

    """
    # Patterns
    page_to_scrape = requests.get(page)
    print(page)
    soup = BeautifulSoup(page_to_scrape.text, "html.parser")
    author_pattern = re.compile(r'Author: (.*?), Thesis')    
    advisor_pattern = re.compile(r'Thesis advisor: (.*?), Degree')
    
    # Components
    author = [
        author_pattern.search(span.text).group(1)
        for span in soup.findAll("span", attrs={"class": "views-field views-field-field-linked-agent"})
    ]
    advisor = [
        advisor_pattern.search(span.text).group(1)
        for span in soup.findAll("span", attrs={"class": "views-field views-field-field-linked-agent"})
    ]   
    
    return author[0], advisor[0]

def createDatabase(page):
    """
    Function to create the database

    Parameters
    ----------
    page : string
        Page to be scraped.

    Returns
    -------
    df : DataFrame
        DataFrame of page.

    """
    # Set up soup
    page_to_scrape = requests.get(page)
    soup = BeautifulSoup(page_to_scrape.text, "html.parser")
    
    # Gather data
    (titles, dates, authors, advisors, links) = gatherData(soup)
    
    # Fix lists
    (dates, authors, advisors) = fixLists(titles, dates, authors, advisors, links, soup)
    
    # Add discipline to DataFrame. Needs to be separate from everything else because there's only 1 discipline per page.
    discipline_pattern = re.compile(r'discipline%3A(.*?)($|&)') 
    discipline = unquote(discipline_pattern.search(page).group(1))
    disciplines = [discipline] * len(titles)

    # Create DataFrame
    df = pd.DataFrame({
        'Discipline': disciplines,
        'Title': titles,
        'Date': dates,
        'Author': authors,
        'Advisor(s)': advisors,
        'Link': links
    }) 
    
    # Concatinate dataFrames and return
    return df

def updateDatabase(pagelist):
    """
    Function to create the final database from the parallelized searches

    Parameters
    ----------
    pagelist : string list
        List of webpages.

    Returns
    -------
    df : dataFrame
        Final DataFrame.

    """
    # Using joblib to parallelize the creation of DataFrames for each page
    results = Parallel(n_jobs=4, verbose=10)(delayed(createDatabase)(page) for page in pagelist)
    
    # Concatenate all DataFrames into one
    df = pd.concat(results, ignore_index=True)

    return df

if __name__=='__main__':
    start = time()
    
    # Assemble webpage list from pages.txt
    with open('pages.txt', 'r') as file:
        pagelist = [line.strip() for line in file if line.strip()]

    # Build dataFrame
    theses = updateDatabase(pagelist)

    # Export to CSV
    theses.to_csv('theses.csv')

    print(time()-start)`;

const Home = () => {
  return (
    <>
      <div className="lg:h-[70px] h-[130px]" />
      <ProjectDiv classname="m-4 p-2">
        <p>
          In May of 2024, I created a web scraper in Python with BeautifulSoup4
          to extract all the thesis projects listed on Wesleyan's Digital
          Collections website (
          <a href="https://digitalcollections.wesleyan.edu/">click!</a>
          ).{" "}
          <b>
            A key requirement of this project was to utilize Wesleyan's High
            Performance Computing Cluster to parallelize and optimize my code.
          </b>{" "}
          This was done through a mixture of smart coding practices as well as
          through various libraries: <b>Pandas</b>, <b>Joblib</b>. To further
          optimize my process and to test the efficacy of various optimization
          techniques, <b>jobs were batched to the cluster using Slurm.</b>
          <br />
          The libraries I tested or learned about were:
        </p>
        <ul className="list-disc ml-4">
          <li>NumPy</li>
          <li>Numba</li>
          <li>PyPy</li>
          <li>Numba for CUDA</li>
          <li>Cython</li>
          <li>Swifter</li>
          <li>Dask</li>
          <li>NSQ</li>
          <li>functools</li>
          <li>gevent</li>
          <li>Tornado</li>
        </ul>
        <p>
          <b>
            I achieved nearly 100x speedup between my original and optimized
            versions of my web scraper.
          </b>
        </p>
      </ProjectDiv>
      <div className="grid lg:grid-cols-2 lg:grid-flow-col gap-4 p-4 flex-col">
        <ProjectDiv classname="p-2 overflow-hidden bg-[#f8f8ff]">
          <h1 className="text-center text-3xl mb-4">ORIGINAL</h1>
          <div className="max-h-[80vh] w-full flex align-center overflow-scroll">
            <SyntaxHighlighter language="Python" style={docco}>
              {code1}
            </SyntaxHighlighter>
          </div>
        </ProjectDiv>
        <ProjectDiv classname="p-2 overflow-hidden bg-[#f8f8ff]">
          <h1 className="text-center text-3xl mb-4">
            OPTIMIZED (100X SPEEDUP)
          </h1>
          <div className="max-h-[80vh] w-full flex align-center overflow-scroll">
            <SyntaxHighlighter language="Python" style={docco}>
              {code2}
            </SyntaxHighlighter>
          </div>
        </ProjectDiv>
      </div>
    </>
  );
};

export default Home;
