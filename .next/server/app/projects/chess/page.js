(()=>{var e={};e.id=45,e.ids=[45],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},6123:e=>{e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}},35994:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>d,tree:()=>h}),t(72969),t(27694),t(68755),t(35866);var a=t(23191),i=t(88716),n=t(37922),o=t.n(n),r=t(95231),l={};for(let e in r)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>r[e]);t.d(s,l);let h=["",{children:["projects",{children:["chess",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,72969)),"/Users/vahn/Documents/Website/app/projects/chess/page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,27694)),"/Users/vahn/Documents/Website/app/projects/chess/layout.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,68755)),"/Users/vahn/Documents/Website/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/vahn/Documents/Website/app/projects/chess/page.tsx"],m="/projects/chess/page",u={require:t,loadChunk:()=>Promise.resolve()},d=new a.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/projects/chess/page",pathname:"/projects/chess",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:h}})},66500:(e,s,t)=>{Promise.resolve().then(t.bind(t,85252)),Promise.resolve().then(t.t.bind(t,79404,23))},9685:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,12994,23)),Promise.resolve().then(t.t.bind(t,96114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,79671,23)),Promise.resolve().then(t.t.bind(t,41868,23)),Promise.resolve().then(t.t.bind(t,84759,23))},56598:()=>{},35303:()=>{},85252:(e,s,t)=>{"use strict";t.d(s,{default:()=>r});var a=t(10326),i=t(91776),n=t(46476),o=t(95637);let r=()=>{let{scrollYProgress:e}=(0,i.v)(),s=(0,n.q)(e,{stiffness:500,damping:25});return a.jsx(o.E.div,{className:"fixed inset-0 h-[10px] bg-lime-500 origin-[0%] z-50",style:{scaleX:s}})}},68755:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>g,metadata:()=>p});var a=t(19510),i=t(85384),n=t.n(i),o=t(57371),r=t(68570);let l=(0,r.createProxy)(String.raw`/Users/vahn/Documents/Website/components/ScrollIndicator.tsx`),{__esModule:h,$$typeof:c}=l;l.default;let m=(0,r.createProxy)(String.raw`/Users/vahn/Documents/Website/components/ScrollIndicator.tsx#default`),u=["home","experience","projects"],d=()=>(0,a.jsxs)(a.Fragment,{children:[a.jsx("div",{className:"fixed inset-x-0 md:h-[70px] h-[130px] backdrop-blur-sm z-40",children:a.jsx("div",{className:"flex md:flex-row flex-col inset-0 mt-[10px] md:h-[60px] h-[120px] justify-evenly items-center",children:u.map((e,s)=>a.jsx(o.default,{href:`/#${e}`,className:"text-3xl font-bold hover:rotate-3 hover:ease-in-out duration-150",children:e.toUpperCase()},s))})}),a.jsx(m,{})]});t(67272);let p={title:"VAHN KESSLER",description:"Welcome to my website!"};function g({children:e}){return a.jsx("html",{lang:"en",children:(0,a.jsxs)("body",{className:n().className,children:[a.jsx("header",{children:a.jsx(d,{})}),e]})})}},27694:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r,metadata:()=>o});var a=t(19510),i=t(6123),n=t.n(i);t(67272);let o={title:"CHESS",description:"Chess Visualizations"};function r({children:e}){return a.jsx("div",{className:n().className,children:a.jsx("main",{children:e})})}},72969:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>k});var a=t(19510),i=t(78133),n=t(92606),o=t(76051),r=t(67012);let l=({description:e,visualization:s,code:t})=>(0,a.jsxs)(o.Z,{className:"grid lg:grid-rows-3 lg:grid-cols-2 lg:grid-flow-col gap-4 p-4 flex-col",children:[a.jsx(r.Z,{classname:"lg:row-span-3 p-2",children:e}),a.jsx(r.Z,{classname:"lg:row-span-2 lg:col-span-2 lg:h-full h-[66vh] overflow-hidden",children:s?a.jsx("iframe",{className:"w-full h-full",src:s}):a.jsx("object",{className:"w-full h-full",id:"pdfObject",data:"/Visualiztoin 3.pdf",type:"application/pdf",children:(0,a.jsxs)("p",{children:["Unable to display PDF file.",(0,a.jsxs)("a",{href:"Visualization 3.pdf",children:[" ",a.jsx("b",{children:"Download"})]})," ","instead."]})})}),a.jsx(r.Z,{classname:"lg:col-span-2 overflow-hidden flex align-center bg-[#f8f8ff]",children:a.jsx("div",{className:"max-h-[33vh] w-full overflow-scroll",children:a.jsx(i.Z,{language:"r",style:n.Z,children:t})})})]}),h=(0,a.jsxs)(a.Fragment,{children:[a.jsx("h1",{className:"text-center text-3xl mb-1",children:"Five Chess Visualizations"}),(0,a.jsxs)("p",{children:["In February of 2023, my roommate insisted that I download the chess.com app and play him in chess. And ever since, I've been hooked. My problem is that I'm terrible at chess. And it's largely because I've refused to learn any chess theory or strategies. Why? Because I'm stubborn. I'm no prodigy—not even close—but I figured if eight-year-olds can make it to world chess championships, my college brain and crippling chess.com app addiction should be just enough to improve somewhat over a few months.",a.jsx("br",{}),"I was wrong. It is months later and I am still unbelievably bad at chess. However, my ego-fueled and na\xefve approach to playing chess has one benefit: I'm the perfect control group! Who else would play chess for hours a week and months on end without attempting to learn anything? I am as far removed as one can be from the best chess players in the world while still having a comprehensive understanding of the game."," ",a.jsx("b",{children:"In this project, I attempt to analyze my chess games fom February to April 2023 through several different factors such as move count, board position, and elo."})," ","These factors will be explained in greater depth throughout the visualizations. I also analyze every game played in three different time classes: bullet, blitz, and rapid. A time class indicates the amount of time allotted to each player in a game. The time for each respective player counts down when it is their turn, and pauses when it is their opponent's turn. Bullet games allot 1-2 minutes for each player, blitz games allot 3-5 minutes for each player, and rapid games allot 5-15 minutes for each player. This results in 4 minute, 10 minute, and 30 minute games. The time class has a significant impact on one's gameplay. Less time on the clock means less time to think of potential moves and how the opponent will respond, and more opportunities for mistakes and irregular outcomes. Because move accuracy can be so different in the different time classes, it is both necessary and entertaining to compare games based on their time class. It is worth noting that the majority of my games played on chess.com are blitz games, so the data of my blitz games is the least susceptible to outliers.",a.jsx("br",{}),a.jsx("b",{children:"A crucial part of my analysis is how my games compares to games played by Hikaru Nakamura, an American chess grandmaster and world champion in several tournaments."})," ","One of the most striking aspects of his gameplay is how accurate he is. In chess, accuracy refers to how closely a player compares to a chess engine, a machine-learning program that determines the 'best' move options. Hikaru averages 80% to 90% accuracy in his games, with a significant portion in the 95%-99% range. This is staggering. It means that he is choosing almost exclusively perfect moves in every game. Hikaru's gameplay is as close to a computer as possible. Thus, by comparing my games with Hikaru's, I am comparing two extremes."," ",a.jsx("b",{children:"How does untrained, na\xefve gameplay compare to some of the most statistically accurate gameplay in the world?"})," ","Just how bad am I? In these past three months, have I improved at all? We'll see what my analysis yields."]})]}),c=(0,a.jsxs)("p",{children:[a.jsx("b",{children:"This visualization looks at the distribution of moves in games that I won and in games that Hikaru won. The distribution accounts for the color of Hikaru's and my pieces. Because white goes first, the player who plays white always has a slight advantage. This becomes evident in the visualization."}),a.jsx("br",{}),"There is a lot of information that can be revealed by the number of moves in a game. Every chess game has three stages: an opening, a midgame, and an endgame. The opening can last up to 20 moves, but as few as 10. The midgame doesn't really have a set move amount because the endgame begins once most pieces have been removed from the board, which can happen after 30 moves, 60 moves, or even after 120 moves. Keeping this in mind, the number of moves in a game tells a story of how the game plays out. A game with a short number of moves means that it ended quickly and decisively; this could be from a gap appearing in a player's defenses that was taken advantage of. By the midgame, the board could be in one of nearly infinite positions, so games that end in the midgame are often the result of a carefully prepared attack. By the endgame, nearly every piece has been removed from the board. Players rely on specific endgame tactics and strategies to account for this lack of pieces. The number of moves in a game can indicate substantially different outcomes. When accounting for time classes, especially games that only give each player 1-2 total minutes, many games can end simply because a player runs out of time, not because they got checkmated.",a.jsx("br",{}),"Across all the time classes, I won more games in fewer moves as white than as black. This makes sense because of white's first-move advantage. As a chess game continues, the advantage from starting as white becomes less and less impactful. This statement is supported through looking at my bullet games. Because games are so quick, white's advantage is maximized. It makes sense that the majority of my bullet games as white are won in a very small number of moves. Interestingly, my bullet move distribution is tri-modal for both black and white. The high density of wins at ~50 and ~70 moves in bullet tells its own story: by the time the game has reached that many moves, players have only a few seconds left on their clock. This means that wins are determined by who can stall longer, forcing their opponent out of time. In bullet games, white's wins are determined by how effectively they can attack, whereas black's wins are determined by how effectively they defend.",a.jsx("br",{}),"Hikaru's data is less irregular than mine. The distributions of the number of moves in Hikaru's games are pretty consistent between colors. In general, his games are won regardless of starting color. This makes sense, because his gameplay is essentially perfect. When you're making the most accurate moves, starting advantages don't have much of an impact. That's part of the beauty of chess: handicaps imposed by the mechanics of the game can be overcome by pure skill. This also explains why the distributions of the number of moves are more similar in longer time classes. With more time to think, one has more time to come up with the best move. And, as Hikaru demonstrates, starting advantages can be overcome with accurate gameplay.",a.jsx("br",{}),"Why are my distributions so much less consistent and so much funkier-looking than Hikaru's? Well, put simply, I'm much much much much much much worse. My games are determined more by luck than skill. It makes sense that my distributions are irregular, because my gameplay is irregular!"]}),m=(0,a.jsxs)("p",{children:[a.jsx("b",{children:"This visualization looks at game outcomes (win, loss, or draw) to find out how the number of moves in a game changes depending on how the game ends."}),a.jsx("br",{}),"These distributions are very interesting. First, it's worth noting that games ending in a draw have a much lower density than those ending in a win or a loss. This makes sense, because most games are won or lost, not drawn.",a.jsx("br",{}),"The distributions of the number of moves in my blitz games point out a flaw in my capabilities as a player. Most of my drawn games happened at ~75 moves, while my won and lost games happened at ~20. This indicates that I struggle heavily in endgame positions. In the endgame, when there are fewer pieces on the board, it is much easier to draw a game. There are multiple reasons why this is the case:",a.jsx("br",{}),"1. The fifty move rule.",a.jsx("br",{}),'This rule states that "a player can claim a draw if no capture has been made and no pawn has been moved in the last fifty moves." During the endgame, it is entirely possible that there are no pawns left on the board, eliminating the second clause of the rule. It is also easier to dodge capture, because there is more space on the board to move. Without any pieces in the way, players can run across the board, dodging attacks. It is harder to get pinned or trapped in one spot and captured. Because I am not good in endgame positions, I often struggle to effectively capture pieces before fifty moves have passed.',a.jsx("br",{}),"2. Stalemate.",a.jsx("br",{}),"A stalemate occurs when a player cannot move any more pieces.",a.jsx("br",{}),"3. Time.",a.jsx("br",{}),'In bullet and blitz games, time is a crucial factor. By the time players have reached the endgame, there are seconds left on the clock. This leaves more opportunities for mistakes. When I am low on time, my thoughts change from "how do I win" to "how do I not run out of time first." This gives my opponent an opportunity to stall with the fifty move rule. It also means that I\'m putting less thought into my moves. Less thought means more mistakes, such as an accidental stalemate or a failure to capture a piece in fifty moves.',a.jsx("br",{}),"Hikaru's draws, by comparison, happen at around the same number of moves as his wins and losses. This is because he is much better than me. Chess grandmasters operate on a different plane of existence: they have played so many games and have had so much practice that they can predict tens of moves in advance. Thus, time is not nearly as much of an issue for Hikaru as it is for me. However, Hikaru's blitz distribution is slightly bimodal, with the second hump at ~125 moves. Chess.com matches players by their skill level. In Hikaru's case, he is playing individuals who are experts at stalling and dodging his attacks. Thus, he can fall victim to the fifty move rule or to a stalemate, or, in rare cases, by running out of time. These occurences are rare, though, which is why the second hump is barely visible. Hikaru's bullet distribution is significantly bimodal. The first hump lines up with his wins and losses, but the second one occurs at ~75 moves. Because bullet games are half the length as blitz games, time is a much more consequential factor—there are more opportunities to mess up.",a.jsx("br",{}),"The distribution of the number of moves in my won bullet games is trimodal, which, although weird, makes sense given the context of the first visualization. The distribution of the number of moves in my rapid games is ridiculous. This is because I have only played 32 rapid games, with 3 draws. Thus, the 3 draws are very evident."]}),u=(0,a.jsxs)("p",{children:[a.jsx("b",{children:"This visualization maps the amount of times pieces were moved to certain positions on the board. It's essentially a 'heat map' of where pieces are placed most often."})," ","This required a gigantic amount of data manipulation, to the point where it literally breaks the shiny app. Because of this, I've embedded a PDF of all the visualzation results instead of a shiny app.",a.jsx("br",{}),"The highest density of pieces in both mine and Hikaru's games happens at the center of the board. This makes sense, because most chess games start by fighting for control over the center of the board. By \"control,\" I mean that whoever is in control over the center has their pieces either on the center squares or attacking the center squares, preventing their opponent from approaching. Control of the center allows for more mobility for your pieces as well as easy access to all parts of the board. Other squares of importance are c3, f3, c6, and f6. In the beginning of a game, knights often move to those squares because they're the only place a knight can move without any other pieces having to be moved first.",a.jsx("br",{}),"In general, these heatmaps demonstrate Hikaru's mastery of board positioning. In the blitz games, for example, the majority concentration of my pieces is on the center squares and the other four squares mentioned previously. Hikaru's blitz heatmap, on the other hand, displays a significant concentration of moves in the center 6x6 grid of the board, a much larger radius. The likely reason why Hikaru's heatmap displays such greater mobility is because he is familiar with a multitude of opening possibilities. When I play chess, I move my knights to the c3 and f3 (or c6 and f6, depending on the color) squares, push my center pawns forward, and proceed from there. I almost exclusively do this every game because I am most comfortable playing this way. My inexperience in chess means I don't know how to react to attacks if my knights and pawns aren't in a position I'm familiar with, so I put my knights and pawns in the same place every game. Hikaru, on the other hand, is comfortable playing from many different opening positions. He may begin his games by building up from the left side, or the right side, or by doing something else, rather than just going for control of the center of the board.",a.jsx("br",{}),"My rapid games are interesting because they don't appear to follow any particular pattern. My rapid games as black showcase a diagonal line in the middle of the board, but my rapid games as white don't indicate anything like that. This is because I am more confident in rapid games. Because the timer is longer, I have more time to think about every move. I'm comfortable moving pieces other than my knights and center pawns because I feel like I have enough time to process my opponent's response and calculate the best moves. In bullet and blitz games, where every second counts, I'm more liable to overlooking a move or making a mistake when I face something I'm not used to, because I have less time to think about proper responses. Hikaru's rapid games also follow less of a pattern than his blitz or bullet games."]}),d=(0,a.jsxs)("p",{children:[a.jsx("b",{children:"This visualization maps Elo in a time series from February to the end of April."})," ","Elo is a rating system used to calculate the relative skill levels of players in a zero-sum game; that is to say, a game where one side losing means the other side wins. Every time class has its own Elo, which means that players can be rated differently for different modes. After playing hundreds of games over several months, have I improved at all? Am I better in certain time classes? How does Hikaru compare?",a.jsx("br",{}),"Frankly, no. I have not improved. In fact, I think I've gotten worse. My blitz and bullet ratings are at around 300 Elo (and decreasing), which puts me in the 15th percentile of players. That means that I am worse than 85% of players on the chess.com website. My rapid rating is a little higher, at 600 Elo, placing me at around the 45th percentile. For a player like me who does not know any chess theory, every game requires me to analyze the board at every position. I don't have an encyclopedia of openings memorized, nor do I know any strategies. My skill in chess is completely dependent on the amount of time I have to think of a move. Hikaru's rating has remained pretty consistent over the months, at around 3300 Elo in bullet and blitz and 2800 Elo in rapid. While Hikaru hasn't \"improved\" in the sense that his Elo hasn't increased, he has remained #2 in the world in blitz and bullet and #6 in the world in rapid for several months, an impossibly impressive feat.",a.jsx("br",{}),'When I made a chess.com account, I foolishly selected "intermediate" for my skill level. That started me off with 1200 Elo in every time class which, as is evident, decreased substantially and rapidly. In conclusion, I need to study.']}),p=(0,a.jsxs)("p",{children:[(0,a.jsxs)("b",{children:["In this visualization I wanted to see how great players are represented internationally."," "]}),"Chess is one of the oldest and most played games in the world, and has been played on every continent on the planet. Unlike sports, which can be inaccessible to many depending on the location, the cost of gear, and how many friends are available, chess can be played by anyone anywhere. Thus, it has had large international impact, with chess masters originating from countries around the globe.",a.jsx("br",{})," While the United States definitely hosts a majority of top players, masters can be seen across the map. Interestingly, a much greater majority of top bullet players live in the United States than in any other country. Fewer than five players per country from countries other than the United States are in the top 50 bullet players. In blitz and rapid time classes, the amount of top players in Russia, China, and India jumps up to ~7 players per country. There are also considerably more top players from South America who play bullet than there are in any other time class."]}),g=(0,a.jsxs)(a.Fragment,{children:[a.jsx("p",{children:"Many questions arose from my findings. I would like to know the locations of everyone in the world that I have played against. I would also like to know how that compares to the locations of players that Hikaru plays against. I wonder if it is different. As I play more games and actually attempt to study chess, I wonder how my visualizations will change. I wonder if I'll actually get better!"}),(0,a.jsxs)("p",{children:["You can download the source file"," ",a.jsx("a",{href:"Final Visualizations.R",target:"_blank",children:a.jsx("b",{children:"here"})})," ","or on my"," ",a.jsx("a",{href:"https://github.com/imvahn/DataVisualizationFinal2023",target:"_blank",children:a.jsx("b",{children:"GitHub"})}),"."]})]}),f=`chessV <- get_raw_chessdotcom(usernames = "imvahn", year_month = c(202302:202304))
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

shinyApp(ui = ui, server = server)`,b=`chessV <- get_raw_chessdotcom(usernames = "imvahn", year_month = c(202302:202304))
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

ui <- fluidPage(
  titlePanel("Density of the Number of Moves Per Game Based on Game Outcome"),
  sidebarLayout(
    sidebarPanel(
      selectInput(
        inputId="gamemode",
        label="Choose a Time Class",
        choices=c("bullet","blitz","rapid"),
        selected="blitz")),
    mainPanel(
      plotOutput("Vahn2"),
      plotOutput("Hikaru2"))))

server<-function(input,output){
  output$Vahn2<-renderPlot({
    ggplot(chessV%>%
              filter(TimeClass==input$gamemode))+
      geom_density(aes(x=nMoves, fill=Win),color="black",alpha=.3)+
      labs(title="Vahn",
            x="Number of Moves",
            y="Density",
            fill="Game Outcome")+
      scale_fill_manual(values=c("red","green","blue"))+
      xlim(c(0,150))})
  output$Hikaru2<-renderPlot({
    ggplot(chessH%>%
              filter(TimeClass==input$gamemode))+
      geom_density(aes(x=nMoves, fill=Win),color="black",alpha=.3)+
      labs(title="Hikaru",
            x="Number of Moves",
            y="Density",
            fill="Game Outcome")+
      scale_fill_manual(values=c("red","green","blue"))+
      xlim(c(0,150))})}

shinyApp(ui=ui, server=server)`,y=`#If you want to compare BULLET games where Hikaru and I play as WHITE, run the
# following lines:

chessV%>%
  filter(TimeClass=="bullet")%>%
  filter(White=="imvahn")%>%
  select(Moves)->countplot1
chessH%>%
  filter(TimeClass=="bullet")%>%
  filter(White=="Hikaru")%>%
  select(Moves)->countplot2

# If you want to compare BULLET games where Hikaru and I play as BLACK, run the
# following lines:

chessV%>%
  filter(TimeClass=="bullet")%>%
  filter(Black=="imvahn")%>%
  select(Moves)->countplot1
chessH%>%
  filter(TimeClass=="bullet")%>%
  filter(Black=="Hikaru")%>%
  select(Moves)->countplot2

# If you want to compare BLITZ games where Hikaru and I play as WHITE, run the
# following lines:

chessV%>%
  filter(TimeClass=="blitz")%>%
  filter(White=="imvahn")%>%
  select(Moves)->countplot1
chessH%>%
  filter(TimeClass=="blitz")%>%
  filter(White=="Hikaru")%>%
  select(Moves)->countplot2

# If you want to compare BLITZ games where Hikaru and I play as BLACK, run the
# following lines:

chessV%>%
  filter(TimeClass=="blitz")%>%
  filter(Black=="imvahn")%>%
  select(Moves)->countplot1
chessH%>%
  filter(TimeClass=="blitz")%>%
  filter(Black=="Hikaru")%>%
  select(Moves)->countplot2

# If you want to compare RAPID games where Hikaru and I play as WHITE, run the
# following lines:

chessV%>%
  filter(TimeClass=="rapid")%>%
  filter(White=="imvahn")%>%
  select(Moves)->countplot1
chessH%>%
  filter(TimeClass=="rapid")%>%
  filter(White=="Hikaru")%>%
  select(Moves)->countplot2

# If you want to compare RAPID games where Hikaru and I play as BLACK, run the
# following lines:

chessV%>%
  filter(TimeClass=="rapid")%>%
  filter(Black=="imvahn")%>%
  select(Moves)->countplot1
chessH%>%
  filter(TimeClass=="rapid")%>%
  filter(Black=="Hikaru")%>%
  select(Moves)->countplot2

# YOU MUST RUN THE FOLLOWING LINES AFTER EVERY TIME
# YOU RUN ANY OF THE ABOVE LINES:

counts<-data.frame(letter=c(rep("a",8),rep("b",8),rep("c",8),rep("d",8),rep("e",8),rep("f",8),rep("g",8),rep("h",8)),
                    number=c(rep(c(1,2,3,4,5,6,7,8),8)),
                    count=rep(0,64))

for (j in 1:nrow(countplot1)){
  Moves_updated<-strsplit(countplot1$Moves, " ")[[j]]
  Moves_updated<-Moves_updated[grepl("^[A-Za-z][0-9a-zA-Z]+$",Moves_updated)]
  Moves_updated<-ifelse(nchar(Moves_updated)==3,substr(Moves_updated,2,3),Moves_updated)
  Moves_updated<-ifelse(nchar(Moves_updated)==4,substr(Moves_updated,3,4),Moves_updated)
  Moves_updated<-ifelse(nchar(Moves_updated)==5,substr(Moves_updated,4,5),Moves_updated)
  df<-data.frame(Moves_updated)
  for(i in 1:nrow(df)){
    df$letter[i]<-strsplit(df$Moves_updated,"")[[i]][1]
    df$number[i]<-strsplit(df$Moves_updated,"")[[i]][2]}
  df%>%
    mutate(number=as.numeric(number))%>%
    group_by(letter,number)%>%
    count(letter)->df
  plot<-left_join(counts,df,by=c("letter","number"))
  plot$n[is.na(plot$n)]<-0
  for(i in 1:nrow(plot)){
    counts$count[i]<-sum(counts$count[i],plot$n[i])}}

counts2<-data.frame(letter=c(rep("a",8),rep("b",8),rep("c",8),rep("d",8),rep("e",8),rep("f",8),rep("g",8),rep("h",8)),
                    number=c(rep(c(1,2,3,4,5,6,7,8),8)),
                    count=rep(0,64))

for (j in 1:nrow(countplot2)){
  Moves_updated2<-strsplit(countplot2$Moves, " ")[[j]]
  Moves_updated2<-Moves_updated2[grepl("^[A-Za-z][0-9a-zA-Z]+$",Moves_updated2)]
  Moves_updated2<-ifelse(nchar(Moves_updated2)==3,substr(Moves_updated2,2,3),Moves_updated2)
  Moves_updated2<-ifelse(nchar(Moves_updated2)==4,substr(Moves_updated2,3,4),Moves_updated2)
  Moves_updated2<-ifelse(nchar(Moves_updated2)==5,substr(Moves_updated2,4,5),Moves_updated2)
  df2<-data.frame(Moves_updated2)
  for(i in 1:nrow(df2)){
    df2$letter[i]<-strsplit(df2$Moves_updated2,"")[[i]][1]
    df2$number[i]<-strsplit(df2$Moves_updated2,"")[[i]][2]}
  df2%>%
    mutate(number=as.numeric(number))%>%
    group_by(letter,number)%>%
    count(letter)->df2
  plot2<-left_join(counts2,df2,by=c("letter","number"))
  plot2$n[is.na(plot2$n)]<-0
  for(i in 1:nrow(plot2)){
    counts2$count[i]<-sum(counts2$count[i],plot2$n[i])}}

# Shiny app:

ui <- fluidPage(
  titlePanel("Chess Piece Position Heatmap"),
  mainPanel(
    plotOutput("Vahn4"),
    plotOutput("Hikaru4")))

server<-function(input,output){
  output$Vahn4<-renderPlot({
    ggplot(counts)+
      geom_tile(aes(x=letter,y=number,fill=count))+
      labs(title="Vahn",
            fill="Count")+
      scale_fill_distiller(palette="Greens",direction=1)+
      theme(axis.title.x=element_blank(),
            axis.ticks.x=element_blank(),
            axis.title.y=element_blank(),
            axis.ticks.y=element_blank(),
            panel.background=element_blank(),
            panel.grid.major=element_blank(),
            panel.grid.minor=element_blank())+
      scale_y_continuous(labels = as.character(counts$number), breaks = counts$number)})
  output$Hikaru4<-renderPlot({
    ggplot(counts2)+
      geom_tile(aes(x=letter,y=number,fill=count))+
      labs(title="Hikaru",
            fill="Count")+
      scale_fill_distiller(palette="Greens",direction=1)+
      theme(axis.title.x=element_blank(),
            axis.ticks.x=element_blank(),
            axis.title.y=element_blank(),
            axis.ticks.y=element_blank(),
            panel.background=element_blank(),
            panel.grid.major=element_blank(),
            panel.grid.minor=element_blank())+
      scale_y_continuous(labels = as.character(counts2$number), breaks = counts2$number)})}

shinyApp(ui=ui,server=server)`,v=`chessV <- get_raw_chessdotcom(usernames = "imvahn", year_month = c(202302:202304))
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

shinyApp(ui=ui,server=server)`,w=`ui <- fluidPage(
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

shinyApp(ui=ui, server=server)`,k=()=>(0,a.jsxs)(a.Fragment,{children:[a.jsx("div",{className:"lg:h-[70px] h-[130px]"}),a.jsx("div",{className:"rounded-xl border-2 border-lime-600 m-4 p-2",children:h}),a.jsx(l,{description:c,visualization:"https://vahn.shinyapps.io/FirstVisualization/",code:f}),a.jsx(l,{description:m,visualization:"https://vahn.shinyapps.io/SecondVisualization/",code:b}),a.jsx(l,{description:u,code:y}),a.jsx(l,{description:d,visualization:"https://vahn.shinyapps.io/FourthVisualization/",code:v}),a.jsx(l,{description:p,visualization:"https://vahn.shinyapps.io/FifthVisualization/",code:w}),a.jsx("div",{className:"rounded-xl border-2 border-lime-600 m-4 p-2",children:g})]})},67012:(e,s,t)=>{"use strict";t.d(s,{Z:()=>i});var a=t(19510);let i=({classname:e,children:s})=>a.jsx("div",{className:`rounded-xl border-2 border-lime-600 drop-shadow-lg hover:translate-y-0.5 hover:ease-in-out duration-150 ${e}`,children:s})},76051:(e,s,t)=>{"use strict";t.d(s,{Z:()=>i});var a=t(19510);let i=({children:e,className:s,id:t})=>a.jsx("section",{className:`w-screen min-h-screen ${s}`,id:t,children:e})},57481:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var a=t(66621);let i=e=>[{type:"image/x-icon",sizes:"256x256",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[948,763,621,526],()=>t(35994));module.exports=a})();