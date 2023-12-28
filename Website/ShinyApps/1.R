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

ui <- fluidPage(
  titlePanel("Density of the Number of Moves Per Game in Won Games"),
  sidebarLayout(
    sidebarPanel(
      selectInput(
        inputId="gamemode",
        label="Choose a Time Class",
        choices=c("bullet","blitz","rapid"),
        selected="blitz")),
    mainPanel(
      plotOutput("Vahn"),
      plotOutput("Hikaru"))))

server<-function(input,output){
  output$Vahn<-renderPlot({
    ggplot(chessV%>%
             filter(TimeClass==input$gamemode)%>%
             filter(Winner=="White" | Winner=="Black"))+
      geom_density(aes(x=nMoves,fill=Winner),color="black",alpha=.5)+
      labs(title="Vahn",
           x="Number of Moves",
           y="Density",
           fill="Piece Color",
           color="Piece Color")+
      scale_fill_manual(values=c("black","white"))+
      xlim(c(0,150))})
  output$Hikaru<-renderPlot({
    ggplot(chessH%>%
             filter(TimeClass==input$gamemode)%>%
             filter(Winner=="White" | Winner=="Black"))+
      geom_density(aes(x=nMoves,fill=Winner),color="black",alpha=.5)+
      labs(title="Hikaru",
           x="Number of Moves",
           y="Density",
           fill="Piece Color",
           color="Piece Color")+
      scale_fill_manual(values=c("black","white"))+
      xlim(c(0,150))})}

shinyApp(ui = ui, server = server)