require(chessR)
require(ggplot2)
require(dplyr)
require(reshape2)
require(plotly)
require(maps)
require(lubridate)
require(chess)
require(rchess)
require(shiny)
require(chess.com)
require(bigchess)
require(tidyr)

chessV <- get_raw_chessdotcom(usernames = "imvahn", year_month = c(202302:202304))
chessH <- get_raw_chessdotcom(usernames = "Hikaru", year_month = c(202302:202304))

chessV$nMoves<-return_num_moves(moves_string=chessV$Moves)
chessV%>%
  filter(Event=="Live Chess")->chessV
chessV<-chessV[!is.na(chessV$ECO),]
chessV$Winner<-NA
chessV$Winner[chessV$White == "imvahn" & chessV$Result == "1-0"]<-"White"
chessV$Winner[chessV$Black == "imvahn" & chessV$Result == "0-1"]<-"Black"

chessH$nMoves<-return_num_moves(moves_string=chessH$Moves)
chessH%>%
  filter(Event=="Live Chess")->chessH
chessH<-chessH[!is.na(chessH$ECO),]
chessH$Winner<-NA
chessH$Winner[chessH$White == "Hikaru" & chessH$Result == "1-0"]<-"White"
chessH$Winner[chessH$Black == "Hikaru" & chessH$Result == "0-1"]<-"Black"

chessV$Win<-"Loss"
chessV$Win[chessV$Winner == "White" | chessV$Winner == "Black"]<-"Win"
chessV$Win[chessV$Result == "1/2-1/2"]<-"Draw"

chessH$Win<-"Loss"
chessH$Win[chessH$Winner == "White" | chessH$Winner == "Black"]<-"Win"
chessH$Win[chessH$Result == "1/2-1/2"]<-"Draw"

chessV$UserELO<-NA
chessV$UserELO<-ifelse(chessV$White=="imvahn",chessV$WhiteElo,chessV$UserELO)
chessV$UserELO<-ifelse(chessV$Black=="imvahn",chessV$BlackElo,chessV$UserELO)
chessV$Date<-as.Date(chessV$Date)
chessV$UserELO<-as.numeric(chessV$UserELO)

chessH$UserELO<-NA
chessH$UserELO<-ifelse(chessH$White=="Hikaru",chessH$WhiteElo,chessH$UserELO)
chessH$UserELO<-ifelse(chessH$Black=="Hikaru",chessH$BlackElo,chessH$UserELO)
chessH$Date<-as.Date(chessH$Date)
chessH$UserELO<-as.numeric(chessH$UserELO)

ui <- fluidPage(
  titlePanel("User Elo Over Time by Time Class"),
  sidebarLayout(
    sidebarPanel(
      selectInput(
        inputId="gamemode",
        label="Choose a Time Class",
        choices=c("bullet","blitz","rapid"),
        selected="blitz",
        multiple=TRUE)),
    mainPanel(
      plotOutput("Vahn3"),
      plotOutput("Hikaru3"))))

server<-function(input,output){
  output$Vahn3<-renderPlot({
    ggplot(chessV%>%
             filter(Date>="2023-02-11")%>%
             filter(TimeClass==input$gamemode))+
      geom_line(aes(x=Date,y=UserELO,color=TimeClass))+
      ylim(c(0,3500))+
      labs(y="User Elo",
           title="Vahn",
           color="Time Class")+
      scale_color_brewer(palette="Accent")})
  output$Hikaru3<-renderPlot({
    ggplot(chessH%>%
             filter(TimeClass==input$gamemode))+
      geom_line(aes(x=Date,y=UserELO,color=TimeClass))+
      ylim(c(0,3500))+
      labs(y="User Elo",
           title="Hikaru",
           color="Time Class")+
      scale_color_brewer(palette="Accent")})}

shinyApp(ui=ui,server=server)