fetch_folha_pagamento_mes <- function(ano = "2016", mes = "01") {
  library(tidyverse)
  library(pdftools)
  
  url <- paste0(
    "http://www2.alerj.rj.gov.br/leideacesso/spic/arquivo/folha-de-pagamento-", 
    ano, 
    "-", 
    mes, 
    ".pdf")
  
  df <- pdf_text(url)
  
  function(x) {
    
  }
}

filter_deputados_estaduais_rj <- function(
  ganho_deputados_datapath = here::here("data/ganhos_deputado_estadual_br.csv")
) {
  
  library(tidyverse)
  
  df <- read_csv(ganho_deputados_datapath) %>% 
    filter(estado == "RJ")
  
}