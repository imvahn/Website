(()=>{var e={};e.id=77,e.ids=[77],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},8818:e=>{e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}},8759:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>h,tree:()=>d}),s(31386),s(34719),s(68755),s(35866);var i=s(23191),r=s(88716),a=s(37922),o=s.n(a),n=s(95231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let d=["",{children:["projects",{children:["scraper",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,31386)),"/Users/vahn/Documents/Website/app/projects/scraper/page.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,34719)),"/Users/vahn/Documents/Website/app/projects/scraper/layout.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,68755)),"/Users/vahn/Documents/Website/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/vahn/Documents/Website/app/projects/scraper/page.tsx"],p="/projects/scraper/page",u={require:s,loadChunk:()=>Promise.resolve()},h=new i.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/projects/scraper/page",pathname:"/projects/scraper",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},66500:(e,t,s)=>{Promise.resolve().then(s.bind(s,85252)),Promise.resolve().then(s.t.bind(s,79404,23))},9685:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,12994,23)),Promise.resolve().then(s.t.bind(s,96114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,79671,23)),Promise.resolve().then(s.t.bind(s,41868,23)),Promise.resolve().then(s.t.bind(s,84759,23))},14902:()=>{},35303:()=>{},85252:(e,t,s)=>{"use strict";s.d(t,{default:()=>n});var i=s(10326),r=s(91776),a=s(46476),o=s(95637);let n=()=>{let{scrollYProgress:e}=(0,r.v)(),t=(0,a.q)(e,{stiffness:500,damping:25});return i.jsx(o.E.div,{className:"fixed inset-0 h-[10px] bg-lime-500 origin-[0%] z-50",style:{scaleX:t}})}},68755:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m,metadata:()=>f});var i=s(19510),r=s(85384),a=s.n(r),o=s(57371),n=s(68570);let l=(0,n.createProxy)(String.raw`/Users/vahn/Documents/Website/components/ScrollIndicator.tsx`),{__esModule:d,$$typeof:c}=l;l.default;let p=(0,n.createProxy)(String.raw`/Users/vahn/Documents/Website/components/ScrollIndicator.tsx#default`),u=["home","experience","projects"],h=()=>(0,i.jsxs)(i.Fragment,{children:[i.jsx("div",{className:"fixed inset-x-0 md:h-[70px] h-[130px] backdrop-blur-sm z-40",children:i.jsx("div",{className:"flex md:flex-row flex-col inset-0 mt-[10px] md:h-[60px] h-[120px] justify-evenly items-center",children:u.map((e,t)=>i.jsx(o.default,{href:`/#${e}`,className:"text-3xl font-bold hover:rotate-3 hover:ease-in-out duration-150",children:e.toUpperCase()},t))})}),i.jsx(p,{})]});s(67272);let f={title:"VAHN KESSLER",description:"Welcome to my website!"};function m({children:e}){return i.jsx("html",{lang:"en",children:(0,i.jsxs)("body",{className:a().className,children:[i.jsx("header",{children:i.jsx(h,{})}),e]})})}},34719:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n,metadata:()=>o});var i=s(19510),r=s(8818),a=s.n(r);s(67272);let o={title:"WEB SCRAPER",description:"Web scraper designed for a HPC cluster"};function n({children:e}){return i.jsx("div",{className:a().className,children:i.jsx("main",{children:e})})}},31386:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var i=s(19510),r=s(78133),a=s(92606),o=s(67012);let n=`#!/usr/bin/python3
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
    
`,l=`#!/usr/bin/python3
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

    print(time()-start)`,d=()=>(0,i.jsxs)(i.Fragment,{children:[i.jsx("div",{className:"lg:h-[70px] h-[130px]"}),(0,i.jsxs)(o.Z,{classname:"m-4 p-2",children:[(0,i.jsxs)("p",{children:["In May of 2024, I created a web scraper in Python with BeautifulSoup4 to extract all the thesis projects listed on Wesleyan's Digital Collections website (",i.jsx("a",{href:"https://digitalcollections.wesleyan.edu/",children:"click!"}),")."," ",i.jsx("b",{children:"A key requirement of this project was to utilize Wesleyan's High Performance Computing Cluster to parallelize and optimize my code."})," ","This was done through a mixture of smart coding practices as well as through various libraries: ",i.jsx("b",{children:"Pandas"}),", ",i.jsx("b",{children:"Joblib"}),". To further optimize my process and to test the efficacy of various optimization techniques, ",i.jsx("b",{children:"jobs were batched to the cluster using Slurm."}),i.jsx("br",{}),"The libraries I tested or learned about were:"]}),(0,i.jsxs)("ul",{className:"list-disc ml-4",children:[i.jsx("li",{children:"NumPy"}),i.jsx("li",{children:"Numba"}),i.jsx("li",{children:"PyPy"}),i.jsx("li",{children:"Numba for CUDA"}),i.jsx("li",{children:"Cython"}),i.jsx("li",{children:"Swifter"}),i.jsx("li",{children:"Dask"}),i.jsx("li",{children:"NSQ"}),i.jsx("li",{children:"functools"}),i.jsx("li",{children:"gevent"}),i.jsx("li",{children:"Tornado"})]}),i.jsx("p",{children:i.jsx("b",{children:"I achieved nearly 100x speedup between my original and optimized versions of my web scraper."})})]}),(0,i.jsxs)("div",{className:"grid lg:grid-cols-2 lg:grid-flow-col gap-4 p-4 flex-col",children:[(0,i.jsxs)(o.Z,{classname:"p-2 overflow-hidden bg-[#f8f8ff]",children:[i.jsx("h1",{className:"text-center text-3xl mb-4",children:"ORIGINAL"}),i.jsx("div",{className:"max-h-[80vh] w-full flex align-center overflow-scroll",children:i.jsx(r.Z,{language:"Python",style:a.Z,children:n})})]}),(0,i.jsxs)(o.Z,{classname:"p-2 overflow-hidden bg-[#f8f8ff]",children:[i.jsx("h1",{className:"text-center text-3xl mb-4",children:"OPTIMIZED (100X SPEEDUP)"}),i.jsx("div",{className:"max-h-[80vh] w-full flex align-center overflow-scroll",children:i.jsx(r.Z,{language:"Python",style:a.Z,children:l})})]})]})]})},67012:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var i=s(19510);let r=({classname:e,children:t})=>i.jsx("div",{className:`rounded-xl border-2 border-lime-600 drop-shadow-lg hover:translate-y-0.5 hover:ease-in-out duration-150 ${e}`,children:t})},57481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var i=s(66621);let r=e=>[{type:"image/x-icon",sizes:"256x256",url:(0,i.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),i=t.X(0,[948,763,621,526],()=>s(8759));module.exports=i})();