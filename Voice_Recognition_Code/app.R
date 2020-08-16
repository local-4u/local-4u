library(shiny)
shinyApp(
  ui = fluidPage(
    singleton(tags$head(
      tags$script(src="//cdnjs.cloudflare.com/ajax/libs/annyang/1.4.0/annyang.min.js"),
      tags$h6(includeScript('init.js')) 
    )),
    div(
      style = 'display: block; margin: auto; width: 100%; max-width: 500px',
      uiOutput('foo')
    )
  ),
  server = function(input, output) {
    lm_line = reactive({
      input$yes
      fit = lm(dist ~ speed, data = cars)
      lines(cars$speed, predict(fit, cars), lwd = 2)
    })
    output$foo = renderText({
      input$hello
    })
  }
)

