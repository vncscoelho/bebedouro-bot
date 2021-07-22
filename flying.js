const { MessageEmbed, GuildMemberManager  } = require('discord.js');
//https://gptw.com.br/wp-content/themes/gptw-child/ranking.json
const companies = ["Terminal de Contenedores de Cartagena S.A. -Contecar S.A.-",
"Seguros Universales",
"Delivery Much",
"LEVVO",
"Sacos del Atlántico",
"ACH Colombia S.A.",
"Comolsa S.A.S., Grupo Molpak (Guamolsa)",
"Gestión Integral de Proyectos GIP S.A.S.",
"Financiera Trinitas",
"Agreca",
"BlueBox Ventures",
"Dextra Digital",
"Guatemala Añejos de Altura",
"Coomeva Sector Protección",
"Laboratorios Bagó del Ecuador S.A.",
"Bio D S.A.",
"Cartório 1º Ofício de Registro de Imóveis da Comarca de Belo Horizonte",
"Visagio",
"Consórcio Luiza",
"ProColombia",
"Esenttia",
"Caja Promotora de Vivienda Militar y de Policía",
"Fondo Nacional de Garantías S.A. -FNG-",
"Meireles e Freitas Serviços de Cobrança",
"Lacnic",
"Mixto Listo",
"ADSOURCING(ALTA DIRECCIÓN DE NEGOCIOS ADITSYSTEMS)",
"VINTAGE PETROLEUM BOLIVIANA",
"WTC FREEZONE",
"GUPY",
"Integon Service CO SA de CV",
"SICOOB Metropolitano",
"Galicia Seguros",
"TecnoSpeed S/A",
"Allog Transportes Internacionais",
"Autofacil Honduras, Carrofácil Guatemala",
"Inteligo Bank, Ltd. Inteligo SAB",
"Lazos",
"First Quality Chemicals",
"Terminal de LNG de Altamira",
"Cacpeco",
"Namu Travel Group",
"Simplot",
"Grupo Karim's",
"GRUPO PROM",
"GRUPO AZOR",
"Hidrovias do Brasil",
"Real Plaza",
"Telered",
"Aeris Holding Costa Rica S.A.",
"Universidad San Carlos",
"Aseguradora Solidaria de Colombia - Entidad Cooperativa",
"Sociedad Portuaria Regional de Cartagena S.A.",
"Banco Galicia",
"Quala Ecuador",
"Magazine Luiza",
"Cementos Progreso",
"DIUNSA ",
"Interbank",
"Sabin Medicina Diagnóstica",
"Naranja",
"Seguros G&T Continental",
"Supera Farma",
"Findeter Banca de Desarrollo Territorial",
"Special Dog",
"Bci",
"Viacredi - Cooperativa de Crédito",
"Fundimisa",
"UNIVERSAL",
"Banco Losango",
"Amêndoas do Brasil",
"Radix",
"Gazin",
"Atlantic City",
"Redeban",
"Credibanco S.A.",
"DHL Express",
"Accor",
"Dell Technologies",
"Mercado Libre",
"Hilton",
"Cisco",
"Volvo",
"NATURA",
"Santander",
"SAP SE",
"Novo Nordisk",
"Gentera",
"Millicom",
"Belcorp",
"Scotiabank",
"Yanbal",
"AT&T Latin America",
"Oracle",
"Roche",
"Logicalis",
"3M",
"Diageo",
"SC Johnson",
"FedEx",
"Falabella",
"Microsoft do Brasil",
"VISAGIO",
"SC Johnson",
"HILTON ",
"Schmersal",
"Cisco",
"Salesforce",
"Visa do Brasil",
"Ticket",
"Bristol Myers Squibb",
"Agência i-Cherry",
"Agência Mirum",
"ASTELLAS FARMA BRASIL IMPORTACAO E DISTRIBUICAO DE MEDICAMENTOS LTDA.",
"BELDEN POLIRON",
"Daitan Group",
"DLL",
"EBANX",
"e-Core",
"FICO",
"Ford Credit",
"Hershey",
"ilegra",
"JBT",
"Maersk",
"Mercado Eletrônico",
"NEOWAY",
"Novo Nordisk",
"NTT",
"NUTRILITE",
"Perkins Motores",
"STRYKER DO BRASIL",
"TAKEDA DISTRIBUIDORA",
"Terphane",
"THOUGHTWORKS",
"Troller",
"Radix",
"SUPERA FARMA LABORATORIOS S.A",
"Consórcio Magalu",
"Dextra Digital",
"LEVVO",
"FUNDIMISA - FUNDIÇÃO E USINAGEM LTDA",
"Sicoob Metropolitano",
"Involves",
"Grupo Tecnospeed ",
"Amêndoas do Brasil",
"BN Papéis",
"Boavista Tecnologia",
"Brasal Participações S/A",
"CIGAM",
"COPASTUR TURISMO",
"DB1 GROUP",
"Elotech Gestão Pública",
"Farmarcas",
"Grupo Elfa",
"GUPY",
"KingHost",
"Locaweb Commerce",
"MATERA Systems",
"Metadados",
"NEOVIA ENGENHARIA",
"Passei Direto",
"Pormade Portas",
"REMASA REFLORESTADORA",
"SICOOB ENGECRED - GO",
"SICOOB SAROMCREDI",
"Strattner",
"Take Blip ",
"TECNICON",
"TELTEC SOLUTIONS",
"Unimed Litoral Sul/RS",
"Caterpillar",
"Magazine Luiza",
"Dell Technologies",
"Tokio Marine Seguradora",
"SAP Labs Latin America",
"MARS BRASIL",
"LABORATORIO SABIN DE ANALISES CLINICAS S.A.",
"ACCOR",
"Novartis",
"Mercado Livre",
"CI&T",
"GAZIN",
"Itaú Unibanco",
"Leroy Merlin",
"Viacredi",
"Momenta Farmacêutica",
"Roche Farmacêutica",
"SESC/RS",
"SAP Brasil",
"Losango",
"3CORAÇÕES",
"3M do Brasil Ltda",
"Aeris",
"ALGAR TELECOM",
"Ambev",
"Ancar Ivanhoe Administradora de Shopping Centers Ltda",
"APETIT SERVIÇOS DE ALIMENTAÇÃO LTDA",
"AstraZeneca",
"AVIVA",
"Banco Bradesco S.A.",
"banco BV",
"BANCO MERCANTIL DO BRASIL S.A.",
"BANCO SANTANDER (BRASIL) S.A.",
"BAXTER HOSPITALAR LTDA",
"CENEGED",
"ClearSale",
"Coats Corrente",
"Copagaz",
"DHL EXPRESS (BRAZIL)",
"DHL Supply Chain",
"Dow",
"Electrolux",
"EMBRACON SANTANA DE PARNAÍBA",
"ENERGISA TOCANTINS",
"Escola Bahiana de Medicina e Saúde Pública",
"Eurofarma Laboratórios S/A",
"Grupo A.Yoshii Engenharia",
"GRUPO SAGA",
"HOSPITAL EDMUNDO VASCONCELOS",
"Hyundai Motor Brasil ",
"IBM Brasil",
"Icatu Seguros",
"INTELBRAS",
"JOHNSON & JOHNSON",
"LIBERTY SEGUROS S/A",
"Liderança Serviços",
"Logicalis",
"MAG Seguros",
"Mercadinhos São Luiz",
"Multilog",
"NATULAB LABORATORIO FARMACEUTICO",
"Novo Nordisk Produção Farmacêutica do Brasil LTDA",
"Oracle do Brasil Sistemas Ltda ",
"Riachuelo",
"Santander Financiamentos",
"SÃO JOSÉ AGROINDUSTRIAL",
"SENAC ADMINISTRACAO REGIONAL - SEDE",
"SKY Brasil",
"SLC Agrícola",
"STIHL",
"SUZANO",
"TICKET LOG",
"Uberlândia Refrescos",
"Unidas",
"Unimed Fortaleza",
"UNIMED-RIO",
"Vivo",
"Volkswagen Caminhões e Ônibus",
"Volvo do Brasil",
"Wiz",
"Gonçalves de Souza Advogados Associados",
"GRUPO BORBA & DE LUCA",
"Marcelo Cabral Advogados Associados",
"Mestres da Web",
"ROI MINE MARKETING E PUBLICIDADE",
"Speed Invest",
"Summit Hub",
"VIRTTUS ENERGIA",
"WG2R DESENVOLVIMENTO E SERVICOS EM INFORMATICA LTDA",
"Zen.Work",
"Letras ",
"Copastur Viagens e Turismo ",
"EMBRACON RN",
"FEBRAFAR",
"NEXT SHIPPING",
"ClassApp",
"MULTIPLIKE",
"Sbtur",
"AEGRO INFORMATICA LIMITADA",
"DP6",
"Accion Sistemas",
"Adtail NewBlue",
"AFRAFEP SAÚDE",
"AGRESTE SANEAMENTO",
"Alianzo",
"ANAGE IMOVEIS LTDA",
"ÁREA CENTRAL",
"Audi Comunicação ",
"Aurum",
"B2 AGENCIA LTDA",
"BELLUNO SOLUÇÕES FINANCEIRAS",
"BETTA TECNOLOGIA",
"BRLink",
"Caixa Seguridade",
"Central Sorológica de Vitória - CSV",
"Cheesecake Labs",
"CONFIANCE MEDICAL",
"CONSTRUSITE BRASIL CRIACAO DE SITES E PORTAIS PARA INTERNET LTDA",
"Convenia",
"Cora",
"CULTURAMA EDITORA E DISTRIBUIDORA LTDA",
"Data System - Softwares Inteligentes",
"DIMENSÃO DISTRIBUIDORA",
"eSapiens",
"FOREGON",
"GRUPO H",
"Intelltech",
"JAK FOTOGRAVURAS",
"Jungle Devs",
"KOBE",
"Labsit",
"Lambda3 Informatica Ltda",
"LUZ DA SERRA VIRTUAL",
"Madeinweb e Mobile",
"Maiojama Empreendimentos Imobiliários",
"Mark Up",
"Mobi7",
"Moskit",
"NeoAssist",
"Netza Promoções e Eventos Ltda - Agencia do Novo",
"Opus Incorporadora",
"Passei Direto",
"PATRUS TRANSPORTES LTDA ",
"paySmart",
"Pris",
"Rebel",
"Seanet Telecom",
"SICOOB CENTRAL NE",
"Simples Vet Tecnologia LTDA",
"Sofist",
"Souza Gomes Imóveis",
"TECNOBANK",
"Tokenlab",
"UNIMED SOBRAL ",
"UNIMED TRANSPORTE AEROMEDICA MG LTDA",
"Valorem Securitizadora de Crédito SA",
"VG Educacional",
"Way2",
"WPA Gestão",
"ZATOM CONFECÇÕES",
"SC Johnson",
"SYDLE",
"Adobe ",
"BEMOBI",
"Quickbooks",
"Brookfield Brasil Timber",
"ConvaTec Brasil",
"Gazeus Games",
"Maple Bear",
"TownSq",
"AGROINSUMOS COMERCIAL AGRÍCOLA LTDA",
"Apex America",
"BARENBRUG BRASIL SEMENTES LTDA",
"Brown Forman ",
"Decal Brasil ",
"FRONIUS DO BRASIL",
"GOK",
"Riot Games Serviços Ltda",
"ROTAM DO BRASIL AGROQUIMICA E PRODUTOS AGRICOLAS LTDA",
"Segware do Brasil",
"Bristol-Myers Squibb",
"Cisco",
"SABIN MEDICINA DIAGNÓSTICA",
"TAKEDA DISTRIBUIDORA",
"Tokio Marine Seguradora",
"Celeo Redes Brasil ",
"ENERGISA TOCANTINS",
"EPASA - CENTRAIS ELÉTRICAS DA PARAÍBA S.A",
"GNA - Gás Natural Açu",
"Transmissora Aliança de Energia Elétrica S.A.",
"CENEGED",
"Cotesa ",
"Portal Solar S.A",
"RDE - REFERENCIAL DESENVOLVIMENTO ENERGETICO LTDA",
"Teccel Engenharia",
"2W Energia ",
"CASA DOS VENTOS ENERGIAS RENOVAVEIS",
"ESFERA ENERGIA",
"KROMA ENERGIA",
"SAFIRA ENERGIA",
"Accor",
"ADP BRASIL ",
"Ambev",
"Amêndoas do Brasil",
"BANCO SANTANDER (BRASIL) S.A.",
"Cisco",
"Grupo Cataratas",
"Levvo",
"SAP Labs Latin America",
"TAKEDA DISTRIBUIDORA",
"Cisco",
"JOHNSON & JOHNSON",
"Vivo",
"TAKEDA DISTRIBUIDORA",
"BANCO SANTANDER (BRASIL) S.A.",
"Accenture do Brasil",
"ADP Brasil",
"B3",
"Banco Bradesco",
"Bristol-Myers Squibb",
"Cisco",
"Cognizant Brasil",
"IBM Brasil",
"RD Station",
"Takeda",
"Cisco",
"Banco Bradesco",
"Banco Santander Brasil",
"Bristol-Myers Squibb",
"IBM Brasil",
"JOHNSON & JOHNSON",
"KingHost",
"LABORATÓRIO SABIN",
"Roche Farmacêutica",
"Tokio Marine Seguradora",
"Cisco",
"ASPEN PHARMA",
"Bristol Myers Squibb",
"ACCOR",
"IBM Brasil",
"GRUPO CATARATAS",
"Cognizant Brasil",
"JOHNSON & JOHNSON",
"KingHost",
"Microsoft",
"JOHNSON & JOHNSON",
"ACCOR",
"GRUPO BOTICÁRIO",
"Cognizant Brasil",
"LABORATÓRIO SABIN",
"BANCO BRADESCO",
"Banco Santander Brasil",
"Magazine Luiza",
"Deloitte",
"Tokio Marine Seguradora",
"Accenture do Brasil",
"Algar Tech",
"APETIT SERVIÇOS DE ALIMENTAÇÃO",
"Banco PAN",
"ClearSale",
"Coats Corrente",
"Dow",
"Escola Bahiana de Medicina e Saúde Pública",
"Espaçolaser",
"GRUPO EPAVI",
"IBM Brasil",
"Icatu Seguros",
"IGUATEMI EMPRESA DE SHOPPING CENTERS",
"Leroy Merlin",
"Losango",
"McDonald's",
"Mongeral Aegon Seguros e Previdência",
"Roche Farmacêutica",
"Senac-RS",
"SERVIÇO SOCIAL DO COMÉRCIO - ADMINISTRAÇÃO NACIONAL",
"SESC/RS",
"Teleperformance",
"Unimed Curitiba",
"Vivo",
"WIZ",
"LEVVO",
"Bristol-Myers Squibb",
"Mastercard",
"ASPEN PHARMA",
"QUALIREDE",
"THOUGHTWORKS",
"Resultados Digitais",
"STRYKER DO BRASIL",
"VISAGIO",
"Renaissance São Paulo Hotel",
"Acqio",
"Agência i-Cherry",
"Agência Mirum",
"Amêndoas do Brasil",
"Astellas",
"Bem Promotora",
"CASABLANCA TURISMO",
"DEMAREST",
"Faculdade FAFIRE",
"Grupo Cataratas",
"KINGHOST",
"LABORATÓRIO BIOANALISE",
"LABORATÓRIO VICENTE LEMOS",
"Méliuz",
"Mercado Eletrônico",
"MetLife",
"nk store",
"Paraná Banco",
"PASA",
"SICREDI VALE DO PIQUIRI ABCD PR/SP",
"Ticket",
"Unimed Laboratório",
"Volkswagen Financial Services",
"ZODIAC PRODUTOS FARMACÊUTICOS",
"Zurich Santander",
"Letras ",
"Mark Up",
"Adtail ",
"Convenia",
"Accion Sistemas",
"PONTAL SERVICOS EM COMUNICACAO DIGITAL LTDA",
"Nação Digital",
"DZ Estúdio",
"Agência CUPOLA",
"Trinto",
"Agência Mirum",
"DP6",
"Agência i-Cherry",
"Cadastra",
"GhFly Network",
"Méliuz",
"Binder Reimagine",
"Blinks Essence",
"Reed Exhibitions ",
"Artplan",
"Caterpillar",
"John Deere",
"SÃO JOSÉ AGROINDUSTRIAL",
"3CORAÇÕES",
"OLAM BRASIL",
"SLC Agrícola",
"DSM",
"ADM DO BRASIL",
"STARA",
"Cresol",
"Amêndoas do Brasil",
"REMASA REFLORESTADORA",
"Nutrilite",
"Moinho Globo ",
"AEGRO INFORMÁTICA",
"Colorado Máquinas",
"Grupo Otávio Lage",
"TERRANUTS",
"STELTENPOOL FLORES E PLANTAS",
"Grupo TEC AGRO",
"JCB DO BRASIL",
"PRODAP",
"Veracel Celulose",
"CAMPO RAÇÕES",
"Agrex do Brasil",
"Spaço Agrícola",
"Avine Alimentos",
"MOINHO IGUAÇU",
"COAGRISOL",
"Dacalda",
"Sbtur",
"COPASTUR TURISMO",
"MAX MILHAS",
"HURB - Hotel Urbano",
"EGALI INTERCÂMBIO",
"ACCOR",
"HILTON ",
"AVIVA",
"GJP ADMINISTRADORA DE HOTEIS",
"ATLANTICA HOTELS",
"Renaissance São Paulo Hotel",
"HOTÉIS SESC/RS",
"Sheraton Grand Rio",
"Hotel Gran Marquise",
"BW Premier Maceio",
"DLL",
"Itaú Unibanco",
"Losango",
"Banco BV",
"BANCO SANTANDER (BRASIL) S.A.",
"BANCO MERCANTIL DO BRASIL S.A.",
"Banco Bradesco S.A.",
"Agibank",
"BANCO MERCEDES-BENZ DO BRASIL S/A",
"Citi",
"Viacredi",
"Sicoob Metropolitano",
"SICOOB ENGECRED - GO",
"SICOOB CENTRAL NE",
"SICOOB SAROMCREDI",
"SICOOB OURO VERDE",
"Cresol",
"Sicredi Ceará Centro Norte",
"SICOOB CREDICAPITAL",
"Cooperativa de Crédito Cocrê",
"Santander Financiamentos",
"OMNI S/A CREDITO FINANCIAMENTO E INVESTIMENTO",
"Portocred",
"Midway",
"Tokio Marine Seguradora",
"MAG Seguros",
"Icatu Seguros",
"LIBERTY SEGUROS S/A",
"Capemisa Seguradora",
"GRUPO SABEMI",
"Visa do Brasil",
"Ticket",
"Ford Credit",
"Valorem Securitizadora de Crédito AS",
"paySmart",
"Elo",
"Cora",
"Alelo",
"Mastercard",
"Gerencianet",
"CROOL CENTRO ODONTOLÓGICO",
"Unimed Laboratório ",
"Psicologia Viva",
"IMED Saúde",
"Instituto Brasiliense de Otorrinolaringologia - IBORL",
"SUPERA FARMA LABORATORIOS S.A",
"Novartis",
"Momenta Farmacêutica",
"AbbVie",
"Active Pharmaceutica Ltda",
"AMGEN BIOTECNOLOGIA DO BRASIL LTDA",
"ASTELLAS FARMA BRASIL IMPORTACAO E DISTRIBUICAO DE MEDICAMENTOS LTDA.",
"AstraZeneca",
"BAXTER HOSPITALAR LTDA",
"Bristol Myers Squibb",
"CHIESI FARMACEUTICA LTDA",
"DAIICHI SANKYO",
"Eurofarma Laboratórios S/A",
"Laboratórios Servier do Brasil ",
"LIBBS",
"NATULAB LABORATORIO FARMACEUTICO",
"Novo Nordisk ",
"Novo Nordisk Produção Farmacêutica do Brasil LTDA",
"Roche Farmacêutica",
"TAKEDA DISTRIBUIDORA",
"Farmarcas",
"Grupo Elfa",
"Comunicare Comercio de Aparelhos Auditivos",
"4BIO MEDICAMENTOS",
"A Nossa Drogaria",
"Acripel Farma",
"CLAMED",
"Farmácias Pague Menos",
"LAS DO BRASIL",
"SAGA MEDICAL",
"HOSPITAL EDMUNDO VASCONCELOS ",
"OFTALMOLASER CLINICA DE CIRURGIA E DIAGNÓSTICOS DO OESTE PAULISTA LTDA",
"HOFTALON",
"GRAACC",
"Hospital de Caridade de Erechim",
"Hospital de Olhos do Norte de Minas",
"HOSPITAL MEMORIAL JABOATÃO",
"Hospital Nossa Senhora das Neves - HNSN",
"HOSPITAL REGIONAL DO CARIRI",
"Hospital Santa Marta",
"FEBRAFAR",
"JOHNSON & JOHNSON",
"Strattner",
"BD",
"BIOMEDICAL PRODUTOS CIENTIF MEDICOS E HOSPITALARES LTDA",
"BSF Saúde",
"CONFIANCE MEDICAL",
"ConvaTec Brasil",
"GSC Integradora de Saúde",
"Locmed Hospitalar",
"MAIS SEG",
"PROMEDON DO BRASIL",
"SAID RIO",
"Shift Consultoria e Sistemas",
"STRYKER DO BRASIL",
"Sabin Medicina Diagnóstica – Distrito Federal",
"Central Sorológica de Vitória - CS",
"LABORATÓRIO VICENTE LEMOS ",
"Labtest Diagnóstica S/A",
"QIAGEN",
"Unimed Fortaleza",
"Unimed Litoral Sul/RS",
"UNIMED SOBRAL ",
"AFRAFEP SAÚDE",
"CLIN - Plano Odonto Digital",
"PASA",
"Unimed Ceará",
"UNIMED DE BARRA MANSA",
"Unimed Federação Minas",
"Unimed Federação Rio",
"UNIMED NOVA IGUACU",
"UNIMED SUL CAPIXABA ",
"UNIMED TRANSPORTE AEROMEDICA MG LTDA",
"Unimed Três Rios Cooperativa de Trabalho Médico",
"UNIMED-RIO",
"Adobe ",
"ClassApp",
"AEGRO INFORMATICA LIMITADA",
"Jungle Devs",
"Lambda3 Informatica Ltda",
"Way2",
"FOREGON",
"Quickbooks",
"KOBE",
"Labsit",
"paySmart",
"eSapiens",
"Sofist",
"Simples Vet Tecnologia LTDA",
"Moskit",
"Mobi7",
"Seanet Telecom",
"Tokenlab",
"Aurum",
"Madeinweb e Mobile",
"TECNOBANK",
"Data System - Softwares Inteligentes",
"Cheesecake Labs",
"CONSTRUSITE BRASIL CRIACAO DE SITES E PORTAIS PARA INTERNET LTDA",
"Pris",
"Convenia",
"Accion Sistemas",
"Betta Tecnologia",
"Área Central",
"Gazeus Games",
"Microsoft Brasil",
"Radix",
"VISAGIO",
"Dextra Digital",
"Cisco",
"Salesforce",
"Visa do Brasil",
"DP6",
"Teltec Solutions ",
"SYDLE",
"Grupo Tecnospeed ",
"Involves",
"BEMOBI",
"EBANX",
"TAKE",
"Resultados Digitais",
"Elotech Gestão Pública",
"KingHost",
"Olist",
"e-Core",
"GUPY",
"Daitan Group",
"CIGAM",
"DB1 GROUP",
"TECNICON",
"Boavista Tecnologia",
"MATERA Systems",
"Metadados",
"Locaweb Commerce",
"Grupo Experity",
"DBC Company",
"THOUGHTWORKS ",
"ilegra",
"Passei Direto",
"OPUS Software",
"Ivia",
"Sensedia",
"SANKHYA GESTAO DE NEGOCIOS",
"MERCADO ELETRONICO",
"FOCCO SOLUÇÕES DE GESTÃO",
"Red Hat",
"Icaro Tech",
"vhsys",
"ZOOM&BUSCAPÉ",
"NEOWAY",
"EloGroup",
"FICO",
"Microcity",
"NTT",
"HOTMART",
"4all",
"Digix",
"Delivery Much",
"MAXMILHAS",
"Pollux",
"INGRAM MICRO",
"Estante Mágica",
"Extreme Digital Solutions",
"DATACOPER",
"BHS ",
"Programmer's Beyond IT",
"Gerencianet",
"Cadence Design Systems do Brasil",
"Soluti Liberdade Digital",
"Elumini",
"HT Micron",
"SYNNEX Westcon Comstor",
"Equinix Brasil",
"FORTINET",
"Zenvia",
"Conquest One",
"Catho",
"Méliuz",
"CONSINCO BY TOTVS",
"GAVB CONSULTING",
"Pitang Agile IT",
"Shift Consultoria e Sistemas",
"Inside Sistemas",
"ACCT",
"Lanlink",
"Dell Technologies",
"SAP Labs Latin America",
"Mercado Livre",
"CI&T",
"SAP Brasil",
"Ambev Tech",
"Logicalis ",
"Oracle do Brasil Sistemas Ltda ",
"Clear Sale",
"INTELBRAS",
"ALGAR TELECOM",
"Vivo",
"Cognizant Brasil",
"IBM Brasil",
"Algar Tech",
"SOFTPLAN",
"Getnet",
"Teleperformance",
"SENIOR SISTEMAS",
"Meta ",
"ALTERDATA SOFTWARE",
"Accenture do Brasil",
"TOTVS S.A.",
"ADP BRASIL ",
"GFT Brasil",
"SESC RS",
"HOSPITAL EDMUNDO VASCONCELOS ",
"SEBRAE RS",
"FUNDACRED",
"HOFTALON",
"HOSPITAL REGIONAL DO CARIRI",
"Hospital Santa Marta",
"Instituto Atlântico",
"Instituto Ayrton Senna",
"IPREDE",
"Pequeno Cotolengo do Paraná - Dom Orione",
"Rede Cidadã",
"SESC Ceará",
"SESC/MS",
"Sindilojas Porto Alegre",
"LEVVO",
"Sbtur",
"TAG - Experiências Literárias",
"ACAL HOME CENTER",
"CNA - INGLÊS DEFINITIVO",
"Grupo Trigo",
"INGRAM MICRO",
"HURB - Hotel Urbano",
"Comunicare Comercio de Aparelhos Auditivos",
"IBAGY IMÓVEIS ",
"4BIO MEDICAMENTOS",
"AUTO NORTE DISTRIBUIDORA DE PEÇAS",
"Casa do Soldador",
"CASA VIEIRA",
"CompuFour Software Ltda",
"COMPUGRAF",
"EGALI INTERCÂMBIO",
"Fattu do Brasil",
"Ibyte",
"Italiana Automóveis",
"Maringá Park Shopping Center",
"NetGlobe",
"Sacolão da Santa",
"Serilon",
"Vortex TI",
"Magazine Luiza",
"GAZIN",
"Leroy Merlin",
"Ancar Ivanhoe Administradora de Shopping Centers Ltda",
"Mercadinhos Sao Luiz",
"Riachuelo",
"USAFLEX- INDUSTRIA & COMERCIO S/A",
"HAVAN",
"Grupo Saga ",
"CLAMED",
"A Nossa Drogaria",
"C&A Modas Ltda",
"CAEDU",
"Extrabom Supermercados",
"Farmácias Pague Menos",
"GRUPO BOTICÁRIO",
"Grupo Carbel",
"GRUPO LAGOA",
"GRUPO ZEMA",
"IGUATEMI EMPRESA DE SHOPPING CENTERS",
"LEO",
"LOJAS LEBES",
"LOJAS MM MERCADOMÓVEIS",
"TODIMO HOME CENTER",
"Via Varejo",
"Caterpillar",
"MARS BRASIL",
"Novartis",
"GAZIN",
"Momenta Farmacêutica",
"Roche Farmacêutica",
"VOLKSWAGEN CAMINHÔES E ÔNIBUS",
"Volvo do Brasil",
"Novo Nordisk Produção Farmacêutica do Brasil LTDA",
"Ambev",
"JOHNSON & JOHNSON",
"Eurofarma Laboratórios S/A",
"BAXTER HOSPITALAR LTDA",
"INTELBRAS",
"3M do Brasil Ltda",
"3CORAÇÕES",
"Aeris",
"AstraZeneca",
"BD",
"C. VALE COOPERATIVA AGROINDUSTRIAL",
"Cacau Show",
"Coats Corrente",
"Dow ",
"Electrolux",
"General Mills",
"GRUPO BOTICÁRIO",
"Hyundai Motor Brasil ",
"INTEGRADA COOPERATIVA AGROINDUSTRIAL",
"Jacobina Mineração –  Yamana Gold",
"LATICÍNIOS TIROLEZ",
"Lear do Brasil - Goiana PE",
"LIBBS",
"NATULAB LABORATORIO FARMACEUTICO",
"STARA",
"STIHL",
"SUZANO",
"Uberlândia Refrescos ",
"USAFLEX- INDUSTRIA & COMERCIO S/A",
"Usina Alta Mogiana",
"Yazaki do Brasil",
"SC Johnson",
"SUPERA FARMA LABORATORIOS S.A",
"Schmersal",
"FUNDIMISA - FUNDIÇÃO E USINAGEM LTDA",
"TAKEDA DISTRIBUIDORA",
"Amêndoas do Brasil",
"Perkins Motores",
"Pormade Portas",
"Nutrilite ",
"Troller",
"BN Papéis",
"Hershey",
"JBT",
"Terphane",
"Grupo Otávio Lage",
"AEL Sistemas",
"Aquário",
"BEBIDAS FRUKI S.A",
"Castertech Fundição e Tecnologia ",
"CERBRAS",
"Compensados Drabecki",
"DAIICHI SANKYO",
"Dimensão Industria do Vestuário ",
"Grupo MPL",
"HARALD",
"HNR INDUSTRIA",
"Ibyte",
"JCB DO BRASIL",
"JOST BRASIL SISTEMAS AUTOMOTIVOS LTDA",
"Laboratórios Servier do Brasil ",
"LITE-ON TECHNOLOGY",
"Moinho Globo ",
"MUSASHI DO BRASIL",
"PALFINGER",
"Peróxidos do Brasil",
"Pollux",
"Quinelato Freios",
"TERRANUTS",
"Veracel Celulose",
"VETNIL INDUSTRIA E COMERCIO DE PRODUTOS VETERIN LTDA",
"Caterpillar",
"Dow ",
"Hyundai Motor Brasil ",
"JOST BRASIL SISTEMAS AUTOMOTIVOS LTDA",
"Lear do Brasil - Goiana PE",
"Perkins Motores",
"Troller",
"VOLKSWAGEN CAMINHÔES E ÔNIBUS",
"Volvo do Brasil",
"Yazaki do Brasil",
"MAPLE BEAR CANADIAN SCHOOL",
"V2 Construções",
"AGRESTE SANEAMENTO S.A.",
"Análise Assessoria Contábil",
"CASA VIEIRA",
"Escola Bahiana de Medicina e Saúde Pública",
"Kordsa ",
"Simples Vet Tecnologia",
"EMBRACON BA",
"Wish Hotel da Bahia",
"Laboratório Sabin ",
"BOMCONSÓRCIO",
"Jacobina Mineração –  Yamana Gold",
"Veracel Celulose",
"NATULAB LABORATORIO FARMACEUTICO",
"Mercado Livre",
"EMBRACON SANTANA DE PARNAÍBA",
"AstraZeneca",
"Banco Bradesco",
"Bradesco Seguros",
"C&A",
"Cacau Show",
"OdontoPrev",
"ATLANTICA HOTELS INTERNATIONAL",
"GFT Brasil",
"H. Strattner",
"Elo",
"Alelo",
"INGRAM MICRO",
"Repom",
"SMILES",
"Catho",
"HARALD",
"DAIICHI SANKYO",
"LIVELO",
"Assurant",
"Banco Cetelem",
"MARTIN BROWER",
"BMC HYUNDAI",
"MULTILOG SÃO PAULO",
"P4 ENGENHARIA",
"CorpFlex",
"LeasePlan Brasil",
"BMG GRANITO",
"Messer Gases Brasil",
"CENEGED",
"Unimed Fortaleza",
"Aeris",
"3CORAÇÕES",
"Banco do Nordeste do Brasil S.A",
"Farmácias Pague Menos",
"GRUPO LAGOA",
"HOSPITAL REGIONAL DO CARIRI",
"HOSPITAL REGIONAL NORTE",
"SESC",
"Amêndoas do Brasil",
"Nutrilite",
"EMBRACON CE",
"ACAL HOME CENTER",
"Ancar Ivanhoe ( North Shopping Maracanú /  North Shopping Jóquei /  North Shopping Fortaleza /  Via Sul Shopping)",
"Avine Alimentos",
"Boavista Tecnologia",
"CASABLANCA TURISMO",
"CB Distribuidora",
"Centro Universitário Paraíso",
"CERBRAS",
"Daniel Transportes",
"FEBRACIS",
"FORTBRASIL",
"GRANDE MOINHO CEARENSE",
"Grupo JW Saraiva",
"Hotel Gran Marquise",
"Ibyte",
"Instituto Atlântico",
"IPREDE",
"Ivia",
"LABORATÓRIO VICENTE LEMOS",
"Lanlink Serviços Ltda",
"Locmed Hospitalar",
"MÃE RAINHA URBANISMO",
"Opção Distribuidora de Alimentos e Bebidas LTDA",
"R. Amaral Advogados",
"Sicredi Ceará Centro Norte",
"Troller",
"Unimed Ceará",
"UNIMED SOBRAL",
"Supergasbras Energia Ltda",
"Desenrolado",
"Agenda Edu",
"Atitude Terceirização Holding",
"Bureau Tecnologia",
"Grupo Controller",
"MAQUIADORO",
"MARPE CONTABILIDADE",
"Mercadapp",
"SABIN MEDICINA DIAGNÓSTICA ",
"Wiz",
"AVIVA",
"Grupo Saga ",
"Jalles Machado ",
"Energisa Mato Grosso do Sul",
"Hospital Santa Marta",
"TODIMO HOME CENTER",
"Uniceub",
"UNIMED GOIANIA",
"ANCAR IVANHOE - CONDOMINIO CIVIL PANTANAL SHOPPING e CONDOMINIO CIVIL DO SHOPPING CENTER CONJUNTO NACIONAL BRASILIA",
"LEVVO",
"SICOOB ENGECRED - GO",
"Brasal Participações",
"EMBRACON GO",
"ADÃO IMÓVEIS ",
"Agrex do Brasil",
"AUTOTRAC COMÉRCIO E TELECOMUNICAÇÕES",
"Brasal Incorporções",
"BRBCARD",
"CABAL BRASIL",
"COPASUL COOPERATIVA AGRÍCOLA SUL MATOGROSSENSE",
"Corretora Seguros BRB",
"CROOL CENTRO ODONTOLÓGICO",
"Digix",
"FGR Urbanismo",
"GRUPO 5 ESTRELAS ",
"Grupo MPL",
"Grupo Otávio Lage",
"Grupo TEC AGRO",
"Inframerica - Aeroporto Internacional de Brasília",
"LAS DO BRASIL",
"Milhão Ingredients",
"MONTREAL INDÚSTRIA",
"MSGAS",
"Ponta Administradora de Consórcios",
"RECH AGRÍCOLA",
"SESC/MS",
"Shopping Center Iguatemi Brasilia",
"Sicoob Uni",
"Social Distribuidora Peças & Acessórios",
"Soluti Liberdade Digital",
"Supergasbrás Energia - Centro Oeste",
"TERRAL SHOPPING CENTER",
"WAM Brasil",
"Opus Incorporadora",
"Brookfield Brasil Timber",
"Alianzo",
"WPA Gestão",
"Caixa Seguridade",
"BSSP CENTRO EDUCACIONAL",
"IGNIÇÃO DIGITAL",
"KBL ACCOUNTING",
"Pax Rio Verde",
"SICOOB LOJICRED",
"EMBRACON ES",
"Central Sorológica de Vitória - CSV",
"SYNNEX Westcon Comstor",
"UNIMED SUL CAPIXABA ",
"PROSPERI",
"MD Sistemas de Computação LTDA",
"Supergasbras",
"RHOPEN CONSULTORIA ",
"SHOPPING VITORIA",
"ATW Delivery Brands",
"Novo Nordisk Produção Farmacêutica do Brasil",
"BANCO MERCANTIL DO BRASIL",
"CENTRO UNIVERSITÁRIO UNA",
"ALGAR TELECOM",
"Uberlândia Refrescos",
"UNI-BH ",
"BD",
"Algar Tech",
"3corações",
"ÂNIMA EDUCAÇÃO",
"Grupo Mantiqueira",
"GRUPO ZEMA",
"Grupo Carbel",
"Bevap",
"MRV  ENGENHARIA E PARTICIPAÇÕES",
"LABORATÓRIO SABIN",
"TAKE",
"Microcity",
"Intelbras",
"SANKHYA GESTÃO DE NEGÓCIOS",
"MAXMILHAS",
"BHS ",
"Gerencianet",
"Cadence Design Systems do Brasil",
"Unimed Federação Minas",
"Méliuz",
"EMBRACON MG",
"HOTMART",
"TURBO BRASIL",
"Energisa Minas Gerais",
"Avenue Code",
"PRODAP",
"CONCERT TECHNOLOGIES",
"Monetizze",
"Grupo Tsuge",
"Letras ",
"SYDLE",
"UNIMED AEROMÉDICA",
"PATRUS TRANSPORTES",
"Souza Gomes Imóveis ",
"SmarttBot",
"Pris",
"2º Tabelionato de Notas de Belo Horizonte - Cartório Jaguarão",
"QUEIMA DIÁRIA",
"LINX CONFINS",
"CBCLOUD ",
"Cientec",
"Bwtech",
"Siteware",
"Dito",
"GAZIN",
"APETIT SERVIÇOS DE ALIMENTAÇÃO LTDA",
"Cresol ",
"Electrolux",
"Grupo A.Yoshii Engenharia",
"Colégio Positivo",
"GRUPO BOTICÁRIO",
"C. VALE COOPERATIVA AGROINDUSTRIAL",
"INTEGRADA COOPERATIVA AGROINDUSTRIAL",
"LOJAS MM MERCADOMÓVEIS",
"Unimed Curitiba ",
"CLINIPAM",
"Copel Distribuição",
"Aker Solutions",
"COPEL-GER",
"Agência Mirum",
"Agência i-Cherry",
"Sicoob Metropolitano",
"REMASA REFLORESTADORA",
"Grupo Tecnospeed ",
"Perkins Motores",
"Cataratas do Iguaçu S/A",
"EBANX",
"Pormade Portas",
"Elotech Gestão Pública",
"Olist",
"DB1 GROUP",
"NEOVIA ENGENHARIA",
"VHSYS",
"SICOOB OURO VERDE",
"SICREDI VALE DO PIQUIRI ABCD PR/SP",
"Moinho Globo ",
"DATACOPER",
"Multilog Paraná",
"SICOOB TRÊS FRONTEIRAS",
"Peróxidos do Brasil",
"Compensados Drabecki",
"GhFly Network",
"BD",
"Inside Sistemas",
"Positivo Educacional",
"PARANA BANCO ",
"VIASOFT ",
"Aquário",
"JUNTO SEGUROS",
"SICOOB ALIANCA",
"SICOOB VALE SUL",
"SICOOB CREDICAPITAL",
"GolSat Tecnologia",
"Supergasbras Energia Ltda",
"Casa do Soldador",
"UNIMED PARANÁ",
"Serilon",
"Banco RCI Brasil",
"Brose do Brasil",
"HOFTALON",
"SICOOB INTEGRADO",
"Cooperativa de Credito da Regiao Meridional do Brasil - Sicoob Unicoob Meridional",
"Dacalda",
"PGA SOLUCOES EM TECNOLOGIA DA INFORMACAO LTDA \u00ad EPP",
"Grupo Foxlux",
"Agro100",
"Unimed Laboratório ",
"SICOOB CENTRAL UNICOOB ",
"MASTERSUL COMEX",
"IBEMA",
"RIVESA",
"META ",
"Gela Boca Sorvetes",
"UNIMED PATO BRANCO",
"VOLK DO BRASIL LTDA",
"Pequeno Cotolengo do Paraná - Dom Orione",
"WISH FOZ DO IGUAÇU",
"Cargolift Logística S.A",
"Juno",
"Marco das Três Fronteiras",
"EMBRACON PR",
"Moskit",
"Mobi7",
"VG Educacional",
"Accion Sistemas",
"Pontomais",
"Nação Digital",
"Sistema de Ensino Aprende Brasil",
"Mercafacil",
"Maringá Park Shopping Center",
"CONSTRUTORA SARAIVA DE REZENDE",
"RGK4IT",
"Agência CUPOLA",
"SEGFY",
"Lear do Brasil - Goiana PE",
"FARMACIA PAGUE MENOS",
"CENEGED-PE",
"THOUGHTWORKS PE",
"MARUPIARA HOTEL PORTO DE GALINHAS",
"Acripel Farma",
"CERS ",
"Da Fonte, Advogados",
"GRUPO DISLUB EQUADOR",
"INSOLE ENERGIA SOLAR",
"Italiana Automóveis",
"Ivia",
"MUSASHI DO BRASIL",
"Pitang Agile IT",
"SICREDI PERNAMBUCRED",
"Terphane",
"Urbano Vitalino Advogados",
"EMBRACON PE",
"Lanlink Pernambuco",
"CAMPARI DO BRASIL - SUAPE",
"Amarante Hospitalidade",
"COELHO & DALLE ADVOGADOS",
"ECO NORONHA",
"SAFETEC",
"CENEGED",
"Pague Menos",
"EMBRACON RN",
"CONDOMINIO CIVIL PRO-INDIVISO DO NATAL SHOPPING CENTER",
"Ivia",
"Wish Natal",
"Serhs Hotels Brasil",
"Losango",
"VOLKSWAGEN CAMINHÔES E ÔNIBUS",
"Ancar Ivanhoe Administradora de Shopping Centers",
"ALTERDATA SOFTWARE",
"IBM Brasil",
"Icatu Seguros",
"MAG Seguros",
"Sapura",
"SUPERGASBRAS RJ",
"UNIMED-RIO",
"Copastur Viagens e Turismo",
"BEMOBI",
"PAINEIRAS - CORCOVADO",
"Agência Trii",
"CONFIANCE MEDICAL",
"Gazeus Games",
"Linx Hotel International Airport Galeão",
"RIOZOO ZOOLÓGICO DO RIO DE JANEIRO",
"Unimed Três Rios Cooperativa de Trabalho Médico",
"WPensar",
"Radix",
"VISAGIO",
"SC Johnson",
"Strattner ",
"Passei Direto",
"Ecad",
"Capemisa Seguradora",
"ZOOM&BUSCAPÉ",
"EloGroup",
"Estante Mágica",
"Aker Solutions",
"AQUARIO",
"Artplan",
"Bem Promotora",
"BINDER + FC COMUNICAÇÃO LTDA",
"Ceneged",
"Elumini",
"Equinix Brasil",
"Extreme Digital Solutions",
"Fattu do Brasil",
"Grupo Trigo",
"HURB - Hotel Urbano",
"Laboratórios Servier do Brasil ",
"Manuchar Comércio Exterior ",
"Muxi",
"Nasajon Sistemas",
"OLX BRASIL",
"PASA",
"Prudential do Brasil",
"Sheraton Grand Rio",
"Transmissora Aliança de Energia Elétrica S.A.",
"UNIMED DE BARRA MANSA",
"Unimed Federação Rio",
"UNIMED NOVA IGUACU",
"VALIA",
"AEGRO INFORMATICA LIMITADA",
"LUZ DA SERRA VIRTUAL",
"KOBE",
"paySmart",
"CULTURAMA EDITORA E DISTRIBUIDORA LTDA",
"Adtail  NewBlue",
"SYSTEM DESENVOLVIMENTO DE SOFTWARE",
"Talkers Idiomas",
"TINY",
"TownSq",
"DLL",
"FUNDIMISA - FUNDIÇÃO E USINAGEM LTDA",
"Multilog Rio Grande do Sul",
"KingHost",
"e-Core",
"CIGAM",
"TECNICON",
"Metadados",
"DBC Company",
"THOUGHTWORKS ",
"TAG - Experiências Literárias",
"ilegra",
"eSales Soluções de Integração Ltda",
"4all",
"FOCCO SOLUÇÕES DE GESTÃO",
"GRUPO SABEMI",
"Castertech Fundição e Tecnologia ",
"Comunicare Comercio de Aparelhos Auditivos",
"JOST BRASIL SISTEMAS AUTOMOTIVOS LTDA",
"Bem Promotora",
"Zenvia",
"Cadastra",
"GAVB CONSULTING",
"Supergasbras Energia Ltda",
"IMED",
"Axur",
"Saque e Pague",
"AEL Sistemas",
"BEBIDAS FRUKI S.A",
"PALFINGER",
"NELOGICA",
"Portocred",
"Unimed Noroeste/RS",
"EGALI INTERCÂMBIO",
"Soprano",
"FUNDACRED",
"UNIMED FEDERAÇÃO/RS",
"Dell Technologies",
"SAP Labs Latin America",
"SESC RS",
"SENAC ADMINISTRACAO REGIONAL - SEDE",
"STIHL",
"USAFLEX- INDUSTRIA & COMERCIO S/A",
"Agibank",
"TICKET LOG",
"SLC Agrícola",
"Getnet",
"LOJAS LEBES",
"Meta ",
"GRUPO EPAVI",
"Viacredi",
"Ambev Tech",
"INTELBRAS",
"HAVAN",
"Liderança Serviços",
"Multilog",
"SOFTPLAN",
"TIGRE MATERIAIS E SOLUCOES PARA CONSTRUCAO LTDA",
"SENIOR SISTEMAS",
"UNIASSELVI",
"Karsten",
"OGOCHI MENSWEAR",
"Librelato S/A Implementos Rodoviários",
"HOSPITAL SANTA CATARINA",
"EXPRESSO SAO MIGUEL LTDA",
"Teltec Solutions ",
"Involves",
"Resultados Digitais",
"BN Papéis",
"SISTEMA UNICRED SC/PR",
"Allog Transportes Internacionais",
"NEOWAY",
"Cresol ",
"Delivery Much",
"Pollux",
"IBAGY IMÓVEIS ",
"Philips Clinical Informatics",
"Central Ailos",
"Construtora Nostra Casa Ltda",
"Movidesk",
"HIPER",
"TRANSPORTADORA PEREGRINA",
"Viacredi Alto Vale",
"ACREDICOOP - Cooperativa de Credito do Norte Catarinense",
"WK SISTEMAS",
"AMCOM SISTEMAS DE INFORMACAO S/A",
"AMTRANS Logistics",
"AGPR5",
"HostGator Brasil",
"ArcTouch",
"UNIMED BLUMENAU",
"Transpocred",
"Fabio Perini Ltda",
"Menezes Niebuhr Advogados Associados",
"DOT digital group",
"NEXT SHIPPING",
"STRATTNER",
"Sbtur",
"Jungle Devs",
"Way2",
"Seanet Telecom",
"Aurum",
"ANAGE IMOVEIS LTDA",
"Cheesecake Labs",
"ZATOM CONFECÇÕES",
"SC Johnson",
"ClassApp",
"FOREGON",
"eSapiens",
"Sofist",
"Agrosmart",
"Audi Comunicação ",
"BARENBRUG BRASIL SEMENTES LTDA",
"BETTA TECNOLOGIA",
"CCLi Consultoria Linguística",
"Cemara Lteamentos",
"Cuponomia",
"Data System - Softwares Inteligentes",
"Evolucional",
"Gamers Club",
"NetGlobe",
"OFTALMOLASER CLINICA DE CIRURGIA E DIAGNÓSTICOS DO OESTE PAULISTA LTDA",
"ROTAM DO BRASIL AGROQUIMICA E PRODUTOS AGRICOLAS LTDA",
"Tokenlab",
"Viceri ",
"Consórcio Magalu",
"Dextra ",
"Schmersal",
"Daitan Group",
"MATERA Systems",
"ACCT",
"Cataguá Construtora e Incorporadora",
"CONSINCO BY TOTVS",
"Cooperativa de Crédito Cocre",
"Icaro Tech",
"JBT",
"JCB DO BRASIL",
"Locaweb Commerce",
"Panasonic  - SJC",
"Programmer's Beyond IT",
"Quinelato Freios",
"Sensedia",
"Shift Consultoria e Sistemas",
"TRIUNFO TRANSBRASILIANA",
"VETNIL INDUSTRIA E COMERCIO DE PRODUTOS VETERIN LTDA",
"CI&T",
"3M do Brasil Ltda",
"Hyundai Motor Brasil ",
"DHL Supply Chain",
"Fadel Soluções em Logística",
"RTE RODONAVES TRANSPORTES E ENCOMENDAS LTDA",
"Usina Alta Mogiana",
"Yazaki do Brasil",
"FEBRAFAR",
"Adobe ",
"Lambda3 Informatica Ltda",
"Quickbooks",
"Labsit",
"Cora",
"Madeinweb e Mobile",
"Mark Up",
"NeoAssist",
"TECNOBANK",
"Microsoft Brasil",
"SUPERA FARMA LABORATORIOS S.A",
"HILTON ",
"Cisco",
"Salesforce",
"ANCAR IVANHOE - CENTERVALE SHOPPING, GOLDEN SQUARE SHOPPING, SHOPPING ELDORADO, SHOPPING METRÔ ITAQUERA, SHOPPING PARQUE DAS BANDEIRAS e SHOPPING PÁTIO PAULISTA",
"Bristol Myers Squibb",
"COPASTUR TURISMO",
"DP6",
"Farmarcas",
"Grupo Experity",
"GUPY",
"Hershey",
"Maersk",
"Novo Nordisk ",
"Strattner",
"STRYKER DO BRASIL",
"TAKEDA DISTRIBUIDORA",
"Ticket",
"Visa do Brasil",
"Magazine Luiza",
"Tokio Marine Seguradora",
"ACCOR",
"Novartis",
"Itaú Unibanco",
"Ambev",
"banco BV",
"BANCO SANTANDER (BRASIL) S.A.",
"EMBRACON SANTANA DE PARNAÍBA",
"Eurofarma Laboratórios S/A",
"JOHNSON & JOHNSON",
"Leroy Merlin",
"Logicalis ",
"Momenta Farmacêutica",
"Oracle do Brasil Sistemas Ltda ",
"Roche Farmacêutica",
"Santander Financiamentos",
"SAP Brasil",
"SKY Brasil",
"Unidas",
"LUZ DA SERRA VIRTUAL",
"CULTURAMA EDITORA E DISTRIBUIDORA LTDA",
"Talkers Idiomas",
"Metadados",
"FOCCO SOLUÇÕES DE GESTÃO",
"Castertech Fundição e Tecnologia ",
"JOST BRASIL SISTEMAS AUTOMOTIVOS LTDA",
"PALFINGER",
"Soprano",
"PLANETA AGUA",
"SICOOB CENTRAL NE",
"Embracon Paraíba",
"Grupo Elfa",
"Digna",
"AFRAFEP SAÚDE",
"Laboratório Sabin de Análises Clínicas",
"CERAS JOHNSON",
"ENERGISA TOCANTINS",
"ANCAR IVANHOE - PORTO VELHO SHOPPING",
"Méliuz",
"LITE-ON TECHNOLOGY",
"Sicoob Credip",
"MINERACAO RIO DO NORTE SA",
"SICOOB CENTRO",
"SICOOB UNIRONDONIA",
"INTELBRAS",
"DISTRIBUIDORA EQUADOR",
"Andrade GC Advogados",
"Supergasbras",
"R D ENGENHARIA E COMÉRCIO LTDA"]

const promoteMucher = async (message, client) => {
  const members = [...message.channel.guild.members.cache.keys()];
  const randomMember = Math.floor(Math.random() * members.length);
  const pickedMember = members[randomMember];

  const randomCompany = Math.floor(Math.random() * companies.length);
  const pickedCompany = companies[randomCompany];

  const { user } = message.channel.guild.members.cache.find(member => member.id === pickedMember);
  const embed = new MessageEmbed()
      .setAuthor(`🚀 TEM MUCHER VOANDO!!!!!`)
      .setThumbnail(user.displayAvatarURL())
      .setColor(16771840)
      .setDescription(`Parabéns **${user.username}** que está indo para a __${pickedCompany}__!! Sucesso e diversão na caminhada!!`);
  message.channel.send(embed);
}

module.exports = { promoteMucher }


