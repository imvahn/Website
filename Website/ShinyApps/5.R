require(ggplot2)
require(dplyr)
require(reshape2)
require(plotly)
require(maps)
require(lubridate)

ui <- fluidPage(
  titlePanel("Chloropleth of Top 50 Players by Time Class"),
  sidebarLayout(
    sidebarPanel(
      selectInput(
        inputId="gamemode",
        label="Choose a Time Class",
        choices=c("live_bullet","live_blitz","live_rapid"),
        selected="live_blitz")),
    mainPanel(
      plotOutput("Map"))))

server<-function(input,output){
  output$Map<-renderPlot({
    daily_leaders <- chessdotcom_leaderboard(game_type = input$gamemode)
    daily_leaders%>%
      mutate(region=gsub(pattern="https://api.chess.com/pub/country/","",country))->daily_leaders
    daily_leaders%>%
      mutate(region = gsub(pattern = "US","USA",region))->daily_leaders
    daily_leaders%>%
      mutate(region = gsub(pattern="XE","UK",region),
             region = gsub(pattern="WS","Samoa",region),
             region = gsub(pattern="NO","Norway",region),
             region = gsub(pattern="CL","Chile",region),
             region = gsub(pattern="RU","Russia",region),
             region = gsub(pattern="FR","France",region),
             region = gsub(pattern="UA","Ukraine",region),
             region = gsub(pattern="NL","Netherlands",region),
             region = gsub(pattern="AU","Australia",region),
             region = gsub(pattern="AZ","Azerbaijan",region),
             region = gsub(pattern="BY","Belarus",region),
             region = gsub(pattern="CN","China",region),
             region = gsub(pattern="DE","Denmark",region),
             region = gsub(pattern="GR","Germany",region),
             region = gsub(pattern="IN","India",region),
             region = gsub(pattern="PE","Peru",region),
             region = gsub(pattern="PL","Poland",region),
             region = gsub(pattern="RO","Romania",region),
             region = gsub(pattern="VN","Vietnam",region),
             region = gsub(pattern="RS","Serbia",region),
             region = gsub(pattern="CZ","Czech Republic",region),
             region = gsub(pattern="AE","United Arab Emirates",region),
             region = gsub(pattern="CA","Canada",region),
             region = gsub(pattern="IM","Isle of Man",region),
             region = gsub(pattern="UZ","Uzbekistan",region),
             region = gsub(pattern="GE","Georgia",region),
             region = gsub(pattern="ES","Spain",region),
             region = gsub(pattern="GI","Gibraltar",region),
             region = gsub(pattern="UY","Uruguay",region),
             region = gsub(pattern="IR","Iran",region),
             region = gsub(pattern="BR","Brazil",region),
             region = gsub(pattern="AR","Argentina",region),
             region = gsub(pattern="ZW","Zimbabwe",region),
             region = gsub(pattern="TR","Turkey",region),
             region = gsub(pattern="CO","Colombia",region),
             region = gsub(pattern="HR","Croatia",region),
             region = gsub(pattern="KZ","Kazakhstan",region),
             region = gsub(pattern="AM","Armenia",region),
             region = gsub(pattern="PG","Papua New Guinea",region),
             region = gsub(pattern="EG","Egypt",region))->daily_leaders
    daily_leaders%>%
      select(username,name,region)->daily_map
    daily_map%>%
      count(region)->daily_map
    ggplot()+
      geom_map(data=mapdata, aes(map_id=region),
               map=mapdata, fill="gray", color="black")+
      geom_map(data=daily_map, aes(map_id=region, fill=n), map= mapdata)+
      expand_limits(x=mapdata$long, y=mapdata$lat)+
      labs(x="",
           y="",
           title="",
           fill="Number of Players")+
      scale_fill_distiller(palette="GnBu",direction=1)})}

shinyApp(ui=ui, server=server)