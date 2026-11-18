/**
 * Dados do projeto — Thiago Hening Fierakoski
 */

const MEMORIAS = [
  {
    id: 1,
    numero: "01",
    titulo: "As primeiras escolas",
    periodo: "Início",
    teaser: "Antes do Gleidis passei por umas três escolas. Não lembro bem os nomes.",
    historia: `
      <p>No começo eu mudei bastante. Foram umas três escolas antes do Gleidis. Os nomes eu não lembro direito. Era pequeno, então o que fica é mais a sensação de trocar de lugar do que o detalhe da sala.</p>
      <p>Cada mudança era um recomeço. Nova turma, novo caminho, tentar se encaixar de novo. Não era dramático, mas também não era simples. Você vai se acostumando a se adaptar.</p>
      <p>Essa fase fica meio embaçada. Serve mais pra mostrar que o caminho escolar meu nunca foi linear desde o início.</p>
    `
  },
  {
    id: 2,
    numero: "02",
    titulo: "Gleidis Rodrigues",
    periodo: "Timbó Grande, SC",
    teaser: "Fiquei até o segundo ou terceiro ano do fundamental.",
    historia: `
      <p>A Gleidis Rodrigues fica em Timbó Grande. Foi uma das primeiras escolas que eu realmente lembro. Fiquei até o segundo ou terceiro ano do fundamental.</p>
      <p>Era uma escola menor, de cidade pequena. O ritmo era outro. Você conhecia quase todo mundo. Ainda estava no começo de aprender a ler, escrever e acompanhar o que a professora pedia.</p>
      <p>Depois eu saí dali. Mudança de cidade, mudança de escola. Mas a Gleidis ficou como marca do início mais concreto da minha vida escolar.</p>
    `
  },
  {
    id: 3,
    numero: "03",
    titulo: "Norma Mônica Sabel",
    periodo: "Gaspar, SC",
    teaser: "Fiquei até o nono ano.",
    historia: `
      <p>Na Norma Mônica Sabel, em Gaspar, eu fiquei bastante tempo. Até o nono ano. Foi o período mais estável de todos.</p>
      <p>Ali eu passei boa parte do fundamental. Vi a turma mudar, professores entrarem e saírem, e fui crescendo junto com a escola. Não era perfeito, mas tinha uma rotina. Você sabia mais ou menos o que esperar.</p>
      <p>Foi nessa fase que a escola começou a pesar um pouco mais. Matérias novas, cobrança diferente, e a ideia de que o Ensino Médio estava chegando. A Norma foi onde eu fiquei mais tempo seguido.</p>
    `
  },
  {
    id: 4,
    numero: "04",
    titulo: "Honório Miranda",
    periodo: "Gaspar, SC",
    teaser: "Comecei o primeiro ano do Ensino Médio aqui.",
    historia: `
      <p>O primeiro ano do Ensino Médio eu comecei no Honório Miranda, também em Gaspar. Entrar no Médio já muda o clima. A cobrança sobe, as matérias ficam mais pesadas e você sente que o jogo ficou sério.</p>
      <p>Não fiquei o ano inteiro. No meio do primeiro ano eu mudei de novo. Foi uma passagem curta, mas importante. Foi o ponto de entrada no Ensino Médio.</p>
      <p>Chegar, tentar se adaptar e depois sair de novo. Já estava acostumado a mudar, mas cada vez ainda pede um esforço.</p>
    `
  },
  {
    id: 5,
    numero: "05",
    titulo: "Morelli",
    periodo: "Meio do 1º ano",
    teaser: "Entrei no meio do primeiro ano.",
    historia: `
      <p>No meio do primeiro ano eu entrei no Morelli. Chegar no meio do caminho é estranho. A turma já tem o ritmo dela, os grupos já estão formados e você precisa achar seu espaço.</p>
      <p>Foi mais uma adaptação. Nova escola, novos professores, tentar entender o que já tinha sido dado e não ficar pra trás. Com o tempo fui me encaixando.</p>
      <p>O Morelli acabou sendo a escola onde continuei. Depois daquela mudança, a ideia era ficar e tocar o Ensino Médio até o fim.</p>
    `
  },
  {
    id: 6,
    numero: "06",
    titulo: "Do segundo ano pra frente",
    periodo: "Ensino Médio",
    teaser: "Seguir em frente e organizar o que vem depois.",
    historia: `
      <p>Depois da mudança pro Morelli, o foco virou seguir em frente. Segundo ano, terceiro ano, redações, provas e a pressão de pensar no que vem depois da escola.</p>
      <p>Foi nessa fase que escrevi boa parte dos textos que estão aqui no site. Temas diferentes, mas o mesmo trabalho de tentar montar um argumento que fizesse sentido.</p>
      <p>Não foi um caminho limpo nem planejado do começo ao fim. Foram várias escolas, algumas mudanças no meio e bastante adaptação. Mesmo assim, cheguei até aqui.</p>
    `
  }
];

const REDACOES = [
  {
    numero: 1,
    titulo: "Quando a seca encontra a enchente",
    previa: "Em várias regiões do Brasil é comum terem períodos de seca forte e, pouco tempo depois, grandes enchentes.",
    texto: `Atualmente, em várias regiões do Brasil, é comum acontecerem períodos de seca muito fortes e, pouco tempo depois, grandes enchentes. Esse problema está relacionado às mudanças climáticas e também às ações humanas, como o desmatamento, a poluição dos rios e o crescimento desorganizado das cidades. Nesse sentido, a falta de cuidado com o meio ambiente e a ausência de planejamento urbano contribuem para o agravamento desses problemas, que afetam diretamente a população brasileira.

Em primeiro lugar, é importante destacar que as ações humanas têm grande influência nessas mudanças. O desmatamento, por exemplo, prejudica o equilíbrio da natureza e interfere no ciclo da água, enquanto a poluição dos rios dificulta o acesso à água limpa. Segundo o conceito de desenvolvimento sustentável, defendido pela Organização das Nações Unidas (ONU), é necessário utilizar os recursos naturais sem comprometer as futuras gerações. Porém, essa ideia ainda está longe de ser colocada em prática em muitas regiões do Brasil.

Além disso, os efeitos desses problemas atingem principalmente a população mais pobre, que muitas vezes vive em áreas de risco e não possui condições de se proteger de enchentes e períodos de seca. A falta de estrutura nas cidades também piora a situação, já que muitas não possuem sistemas adequados de drenagem e abastecimento de água. Dessa forma, os desastres ambientais acabam aumentando as desigualdades sociais e causando prejuízos para milhares de famílias.

Portanto, é necessário que o Governo Federal, junto às prefeituras, tome medidas para diminuir esses problemas. Para isso, devem ser realizados investimentos em saneamento básico, sistemas de drenagem e preservação de áreas verdes, além de ações de fiscalização contra o desmatamento e a poluição dos rios. Também cabe às escolas e aos meios de comunicação promover campanhas de conscientização ambiental, mostrando à população a importância de preservar a natureza. Assim, será possível reduzir os impactos das mudanças no ciclo da água e garantir melhores condições de vida para a sociedade.`
  },
  {
    numero: 2,
    titulo: "Canetas emagrecedoras e a pressão estética",
    previa: "A busca por um corpo considerado perfeito ganhou força com as redes sociais. As canetas emagrecedoras passaram a ser usadas sem necessidade ou orientação médica.",
    texto: `A busca por um corpo considerado perfeito sempre esteve presente na sociedade, mas ganhou ainda mais força com a influência das redes sociais. Nesse cenário, as chamadas canetas emagrecedoras passaram a ser utilizadas por muitas pessoas que desejam perder peso rapidamente, mesmo sem necessidade ou orientação médica. O que deveria ser um tratamento de saúde acaba sendo tratado como uma solução estética, trazendo riscos para quem utiliza esses medicamentos de forma inadequada.

A pressão para alcançar determinados padrões de beleza é um dos fatores que explicam o crescimento desse problema. Nas redes sociais, é comum encontrar pessoas divulgando resultados rápidos de emagrecimento, o que acaba criando expectativas irreais em quem acompanha esse tipo de conteúdo. Essa situação pode ser relacionada ao conceito de sociedade de consumo, apresentado pelo sociólogo Zygmunt Bauman, no qual as pessoas são constantemente incentivadas a buscar satisfação imediata. Dessa forma, a aparência física passa a ser vista como algo que precisa ser mudado rapidamente, aumentando a procura por métodos que nem sempre são seguros.

Outro fator preocupante é a falta de informação sobre os riscos desses medicamentos. Muitas pessoas utilizam as canetas emagrecedoras por influência da internet ou por indicação de conhecidos, sem entender que elas podem causar efeitos colaterais e precisam de acompanhamento profissional. Além disso, quando esses remédios são utilizados sem necessidade, a saúde acaba ficando em segundo plano em nome de um resultado estético. Assim, a popularização desse tipo de medicamento sem os devidos cuidados se torna um problema de saúde pública.

Para mudar essa realidade, o Ministério da Saúde, em parceria com a Anvisa, deve intensificar a fiscalização da venda e da prescrição desses medicamentos, por meio de um controle mais rigoroso e da orientação aos profissionais de saúde, evitando o uso sem indicação adequada. Ao mesmo tempo, o Ministério da Educação deve promover campanhas nas escolas sobre os riscos da busca por padrões de beleza e a importância de cuidar da saúde. Com essas medidas, será possível diminuir o uso irresponsável das canetas emagrecedoras e incentivar uma relação mais saudável com o próprio corpo.`
  },
  {
    numero: 3,
    titulo: "Inteligência artificial e deepfakes",
    previa: "A IA facilita muita coisa no dia a dia, mas também é usada para criar vídeos, imagens e áudios falsos que enganam fácil.",
    texto: `Com o avanço da tecnologia, a inteligência artificial passou a facilitar diversas atividades do dia a dia. Apesar dos benefícios, essas ferramentas também começaram a ser utilizadas para criar vídeos, imagens e áudios falsos, muitas vezes difíceis de identificar. Esse cenário é preocupante, pois a divulgação desses conteúdos pode prejudicar pessoas, espalhar informações falsas e até interferir nas decisões da sociedade.

Um dos principais motivos para o crescimento desse problema é a falta de cuidado ao consumir informações na internet. Muitas pessoas compartilham notícias e vídeos sem verificar se são verdadeiros, contribuindo para que conteúdos manipulados alcancem milhares de usuários. Nesse sentido, a Constituição Federal de 1988 garante o acesso à informação como um direito fundamental dos cidadãos. Entretanto, esse direito acaba sendo prejudicado quando informações falsas são divulgadas como se fossem verdadeiras, dificultando o acesso da população a conteúdos confiáveis.

As consequências também aparecem na vida de quem se torna vítima dessas manipulações. Imagens e vídeos falsos podem prejudicar a reputação de uma pessoa, enquanto áudios manipulados podem ser utilizados em golpes financeiros. Além disso, durante períodos eleitorais, essas ferramentas podem ser usadas para espalhar mentiras e influenciar a opinião dos eleitores. Dessa forma, a falta de controle sobre o uso da inteligência artificial representa um risco não apenas individual, mas também para a democracia.

Para enfrentar essa situação, o Ministério da Justiça deve atuar junto às plataformas digitais, criando medidas para facilitar a denúncia e a retirada de conteúdos comprovadamente falsos que prejudiquem os cidadãos, além de responsabilizar os responsáveis por essas práticas. Paralelamente, as instituições de ensino devem promover atividades de educação digital, ensinando os estudantes a verificar a origem das informações antes de compartilhá-las. Assim, será possível diminuir a circulação de conteúdos manipulados e tornar o ambiente virtual mais seguro.`
  },
  {
    numero: 4,
    titulo: "Bets e o endividamento de jovens",
    previa: "A promessa de ganhar dinheiro fácil tem puxado muita gente jovem pra plataformas de apostas.",
    texto: `A promessa de ganhar dinheiro sem precisar de muito esforço tem atraído cada vez mais jovens brasileiros para as plataformas de apostas esportivas. Com a facilidade de acesso pelo celular e a grande quantidade de propagandas na internet, esse tipo de entretenimento passou a fazer parte da rotina de muitos estudantes. No entanto, o que parece uma oportunidade de lucro pode acabar causando dívidas, dependência e prejuízos para o futuro desses jovens.

Essa situação está diretamente relacionada à influência da publicidade, principalmente nas redes sociais. Muitos influenciadores divulgam plataformas de apostas e mostram possíveis ganhos, fazendo com que o público tenha a impressão de que ganhar dinheiro é algo simples. Essa realidade pode ser relacionada à obra O Jogador, do escritor Fiódor Dostoiévski, que apresenta como o desejo de ganhar dinheiro por meio dos jogos pode levar uma pessoa a perder o controle sobre suas próprias escolhas. De maneira semelhante, muitos jovens acabam entrando nesse ciclo sem perceber os riscos envolvidos.

Outro problema é a falta de conhecimento sobre educação financeira. Sem entender como organizar o próprio dinheiro, alguns estudantes acabam utilizando valores destinados a necessidades pessoais ou até mesmo aos estudos para continuar apostando. Quando perdem, muitos tentam recuperar o dinheiro realizando novas apostas, aumentando ainda mais os prejuízos. Com isso, o hábito pode afetar o rendimento escolar, as relações familiares e a saúde emocional dos envolvidos.

Diante desse cenário, o Conselho Nacional de Autorregulamentação Publicitária (CONAR), em parceria com as plataformas digitais, deve fiscalizar com mais rigor as propagandas de apostas esportivas, impedindo anúncios que incentivem o público menor de idade a participar desses jogos e exigindo avisos claros sobre os riscos envolvidos. Além disso, as escolas devem desenvolver projetos de educação financeira, por meio de atividades e palestras que ensinem os estudantes a administrar o dinheiro e compreender os perigos das apostas. Dessa maneira, será possível reduzir o envolvimento precoce dos jovens com esses jogos e evitar consequências que possam prejudicar seu futuro.`
  },
  {
    numero: 5,
    titulo: "Inclusão digital no Brasil",
    previa: "A tecnologia está em tudo, mas nem todo mundo consegue acompanhar. A desigualdade também aparece no acesso à internet.",
    texto: `A tecnologia está cada vez mais presente na vida das pessoas, seja nos estudos, no trabalho ou até mesmo no acesso a serviços básicos. Porém, nem todos conseguem acompanhar esse avanço. No Brasil, muitas famílias ainda não possuem acesso adequado à internet ou não sabem utilizar as ferramentas digitais de maneira produtiva. Dessa forma, a desigualdade social também se reflete no ambiente tecnológico, dificultando o acesso a oportunidades e aumentando a exclusão de parte da população.

Um dos principais fatores que contribuem para essa situação é a diferença de condições financeiras entre os brasileiros. Enquanto algumas pessoas possuem acesso à internet de qualidade e equipamentos modernos, outras precisam dividir um único celular entre vários membros da família ou dependem de redes públicas. Essa realidade mostra como a falta de recursos pode limitar as oportunidades de uma pessoa, principalmente quando atividades importantes, como estudar e procurar emprego, dependem cada vez mais da tecnologia.

Outro aspecto que merece atenção é a falta de conhecimento para utilizar essas ferramentas. O sociólogo Manuel Castells, ao discutir o conceito de Sociedade em Rede, explica como as tecnologias de informação passaram a ocupar um papel importante na organização da sociedade. Porém, quem não possui acesso ou conhecimento para utilizar esses recursos acaba ficando em desvantagem. Assim, a exclusão digital não acontece apenas pela falta de internet, mas também pela dificuldade de acompanhar as mudanças tecnológicas.

Para mudar esse cenário, o Ministério das Comunicações deve ampliar os projetos de acesso gratuito à internet em comunidades periféricas e regiões rurais, por meio da instalação de pontos de conexão e da melhoria da infraestrutura local. Além disso, o Sistema S, por meio de instituições como o SENAI e o SENAC, deve oferecer cursos gratuitos de informática para pessoas de baixa renda, ensinando desde o uso básico da internet até ferramentas utilizadas no mercado de trabalho. Dessa maneira, será possível diminuir a exclusão digital e garantir que mais brasileiros tenham acesso às oportunidades oferecidas pela tecnologia.`
  },
  {
    numero: 6,
    titulo: "Cultura fitness e pressão sobre crianças",
    previa: "Crianças e adolescentes estão cada vez mais expostos a padrões de corpo nas redes. O que deveria ser saúde vira cobrança.",
    texto: `A infância deveria ser uma fase marcada por brincadeiras, descobertas e desenvolvimento. Porém, com a influência das redes sociais, crianças e adolescentes estão cada vez mais expostos a padrões de beleza e cobranças relacionadas à aparência física. A busca por um corpo considerado perfeito acaba incentivando hábitos que nem sempre são saudáveis, podendo prejudicar tanto o desenvolvimento físico quanto o emocional dos mais jovens.

Uma das causas desse problema é a influência dos conteúdos publicados na internet. Muitos influenciadores compartilham rotinas de exercícios e dietas, fazendo com que crianças e adolescentes tentem reproduzir comportamentos que não são adequados para sua idade. Essa situação pode ser relacionada ao conceito de indústria cultural, desenvolvido pelos filósofos Theodor Adorno e Max Horkheimer, que explica como os meios de comunicação influenciam os hábitos e os padrões da sociedade. Dessa maneira, a exposição constante a imagens de corpos considerados ideais pode fazer com que os mais jovens desenvolvam insatisfação com a própria aparência.

Os impactos dessa pressão também podem aparecer na saúde e no comportamento das crianças. A tentativa de alcançar resultados rápidos pode levar à prática exagerada de exercícios, restrições alimentares e até problemas de autoestima. Além disso, a preocupação excessiva com a aparência pode fazer com que atividades que deveriam ser divertidas se tornem obrigações. Assim, a infância acaba sendo afetada por cobranças que não deveriam fazer parte dessa fase da vida.

Diante disso, o Conselho Federal de Psicologia, em parceria com as escolas, deve promover campanhas de conscientização sobre os impactos da pressão estética na infância, por meio de palestras e atividades educativas que ajudem crianças e adolescentes a desenvolver uma relação mais saudável com o próprio corpo. Ao mesmo tempo, os pais devem acompanhar o conteúdo consumido pelos filhos nas redes sociais e incentivar atividades físicas voltadas ao lazer e à saúde, sem cobranças relacionadas à aparência. Dessa forma, será possível proteger o desenvolvimento dos jovens e garantir uma infância mais saudável.`
  },
  {
    numero: 7,
    titulo: "Povos originários e direitos no Brasil",
    previa: "Mesmo com direitos na Constituição, muitos povos indígenas ainda enfrentam invasão de terra e falta de proteção.",
    texto: `A população indígena possui um papel fundamental na formação da história e da cultura brasileira. Apesar disso, muitos povos originários ainda enfrentam dificuldades para proteger suas terras e manter seus costumes. A invasão de territórios, o desmatamento e a exploração ilegal dos recursos naturais mostram que os direitos dessas comunidades ainda não são respeitados como deveriam, colocando em risco sua cultura e seu modo de vida.

Um dos principais motivos para a continuidade desse problema é o interesse econômico sobre as terras indígenas. Atividades como o garimpo ilegal, a exploração de madeira e a expansão de áreas de produção acabam provocando conflitos e destruindo espaços importantes para essas comunidades. Essa situação pode ser relacionada à obra Ideias para adiar o fim do mundo, do escritor indígena Ailton Krenak, que questiona a maneira como a sociedade explora a natureza sem considerar os impactos sobre os povos que dependem dela. Dessa forma, a busca pelo lucro acaba sendo colocada acima da preservação ambiental e dos direitos indígenas.

Outro fator que agrava essa realidade é a falta de proteção adequada dos territórios. Mesmo com o reconhecimento dos direitos indígenas pela Constituição Federal de 1988, muitas comunidades ainda enfrentam invasões e ameaças, além da demora nos processos de demarcação de terras. Com isso, os povos originários encontram dificuldades para manter suas tradições, proteger seus recursos naturais e viver com segurança. Portanto, a falta de medidas efetivas acaba contribuindo para a continuidade da violência e da desigualdade enfrentadas por essas populações.

Diante desse cenário, o Ministério dos Povos Indígenas deve atuar junto à Funai para acelerar os processos de demarcação e garantir a proteção dos territórios já reconhecidos, por meio de equipes de fiscalização e operações contra invasões ilegais. Além disso, o Ministério da Educação deve ampliar o ensino da história e da cultura indígena nas escolas, por meio de projetos e atividades que valorizem a participação desses povos na formação do Brasil. Assim, será possível proteger os direitos das comunidades indígenas e preservar suas culturas para as próximas gerações.`
  },
  {
    numero: 8,
    titulo: "Algoritmos e o consumo de informação",
    previa: "As redes não mostram as coisas de forma aleatória. Os algoritmos escolhem o que você vê.",
    texto: `As redes sociais se tornaram uma das principais formas de acesso à informação, influenciando a maneira como as pessoas enxergam o mundo. Porém, os conteúdos exibidos nessas plataformas não aparecem de forma aleatória, pois são selecionados por algoritmos que analisam os interesses e comportamentos dos usuários. Embora isso facilite a navegação, também pode limitar o contato com opiniões diferentes, contribuindo para a desinformação e o aumento da polarização na sociedade.

Um dos fatores que explicam esse problema é o funcionamento dos sistemas de recomendação, que costumam priorizar conteúdos semelhantes aos que o usuário já consome. Essa situação pode ser relacionada ao conceito de exposição seletiva, estudado na área da comunicação, que explica a tendência das pessoas de procurar informações que confirmem suas próprias opiniões. Com isso, muitos usuários passam a ter contato apenas com ideias parecidas com as suas, deixando de conhecer outros pontos de vista e dificultando o debate saudável.

Além da limitação de opiniões, esse comportamento também facilita a circulação de notícias falsas. Quando uma pessoa permanece em um ambiente digital com poucas informações diferentes, pode acabar acreditando que determinada opinião representa a realidade de todos. Nesse cenário, conteúdos enganosos podem ganhar força e influenciar decisões individuais e coletivas. Dessa maneira, a falta de diversidade nas informações prejudica o pensamento crítico e enfraquece a convivência entre diferentes grupos sociais.

Para enfrentar esse problema, o Conselho Administrativo de Defesa Econômica (CADE), em conjunto com órgãos de proteção ao consumidor, deve acompanhar as práticas das grandes plataformas digitais e exigir informações mais claras sobre os critérios utilizados na recomendação de conteúdos. Essa medida deve ocorrer por meio de regras de transparência e fiscalização, permitindo que os usuários compreendam melhor como as publicações são selecionadas. Paralelamente, as bibliotecas públicas devem promover oficinas de educação midiática, ensinando a população a comparar fontes e identificar informações falsas. Assim, será possível incentivar o consumo consciente de informações e ampliar o contato com diferentes opiniões.`
  },
  {
    numero: 9,
    titulo: "Preservação de monumentos históricos",
    previa: "Muitos espaços históricos no Brasil estão mal cuidados. Quando um patrimônio se perde, perde-se memória.",
    texto: `Os patrimônios históricos são importantes para preservar a memória e a identidade de um país, pois representam acontecimentos, costumes e histórias de diferentes gerações. No Brasil, porém, muitos desses espaços enfrentam problemas de conservação e falta de investimentos, o que coloca em risco parte da história nacional. Dessa forma, a negligência com a preservação desses bens culturais acaba prejudicando o conhecimento sobre o passado e a valorização da própria cultura brasileira.

Um dos principais motivos para esse problema é a falta de investimentos na manutenção dos espaços históricos. Muitos museus e construções antigas não recebem os cuidados necessários, ficando vulneráveis a incêndios, infiltrações e outros danos. Essa situação pode ser relacionada ao pensamento do historiador francês Jacques Le Goff, que destaca a importância da memória para a construção da identidade de uma sociedade. Nesse sentido, quando um patrimônio é destruído, não se perde apenas uma construção ou um objeto, mas também parte dos registros que ajudam a compreender a história de um povo.

Outro fator que contribui para esse cenário é a pouca valorização da cultura histórica pela sociedade. Muitas pessoas não reconhecem a importância dos museus e de outros espaços culturais, o que acaba diminuindo o interesse pela preservação desses locais. Além disso, quando não existe uma fiscalização adequada, os problemas estruturais podem permanecer por anos até que aconteça algum desastre. Um exemplo disso foi o incêndio do Museu Nacional, em 2018, que destruiu grande parte de seu acervo e mostrou as consequências da falta de cuidados com instituições históricas.

Diante dessa realidade, o Instituto Brasileiro de Museus (Ibram), em parceria com as administrações responsáveis pelos espaços culturais, deve criar programas permanentes de manutenção e prevenção de acidentes, por meio de vistorias periódicas, modernização dos sistemas de segurança e investimentos na estrutura dos museus. Além disso, as secretarias de educação devem organizar visitas escolares e projetos sobre a história local, incentivando os estudantes a conhecer e valorizar o patrimônio cultural. Assim, será possível evitar novas perdas e garantir que a história brasileira continue sendo preservada para as próximas gerações.`
  },
  {
    numero: 10,
    titulo: "Lixo espacial e exploração do espaço",
    previa: "O avanço das missões espaciais trouxe um problema pouco comentado: o acúmulo de resíduos na órbita da Terra.",
    texto: `A exploração espacial trouxe grandes avanços para a humanidade, principalmente nas áreas de comunicação, tecnologia e pesquisa científica. Entretanto, o aumento do número de foguetes e satélites enviados ao espaço também trouxe um problema que nem sempre recebe a devida atenção: o acúmulo de lixo espacial. Esses resíduos representam riscos para novas missões e mostram como a falta de planejamento ambiental pode transformar até mesmo o espaço em um local de poluição.

Uma das principais causas desse problema é o crescimento das atividades espaciais sem medidas suficientes para controlar os resíduos deixados pelas missões. Satélites desativados e partes de foguetes permanecem na órbita terrestre, podendo colidir com outros equipamentos e gerar ainda mais fragmentos. Essa situação pode ser relacionada ao conceito de Tragédia dos Comuns, apresentado pelo ecologista Garrett Hardin, que explica como o uso descontrolado de um recurso compartilhado pode prejudicar todos que dependem dele. Nesse caso, a exploração espacial sem responsabilidade coloca em risco um ambiente utilizado por diferentes países.

Além dos riscos para os equipamentos e para as comunicações, o lixo espacial também pode causar impactos ambientais quando seus fragmentos retornam à atmosfera. Mesmo que parte desses materiais se desintegre durante a reentrada, o aumento dessas atividades levanta preocupações sobre seus possíveis efeitos no meio ambiente. Dessa maneira, a busca por avanços tecnológicos não deve acontecer sem considerar as consequências que podem surgir no futuro.

Para evitar que esse problema aumente, a Organização das Nações Unidas (ONU), por meio do Escritório das Nações Unidas para Assuntos do Espaço Exterior (UNOOSA), deve incentivar acordos internacionais que estabeleçam regras para o descarte de equipamentos espaciais, exigindo que países e empresas apresentem planos de retirada de satélites ao final de suas atividades. Além disso, as agências espaciais devem investir em tecnologias que permitam recolher ou direcionar esses resíduos para uma destinação segura. Assim, será possível continuar explorando o espaço sem comprometer a segurança das futuras missões e o equilíbrio do ambiente orbital.`
  },
  {
    numero: 11,
    titulo: "Espécies em extinção no Brasil",
    previa: "Desmatamento, queimadas e caça ilegal colocam em risco animais importantes pro equilíbrio da natureza.",
    texto: `O Brasil possui uma grande diversidade de animais, como a onça-pintada, a arara-azul e o lobo-guará, que são importantes para o equilíbrio da natureza. Porém, muitas dessas espécies estão ameaçadas por causa das ações humanas, como o desmatamento, as queimadas e a caça ilegal. Embora o artigo 225 da Constituição Federal garanta o direito a um meio ambiente equilibrado, a falta de preservação ainda coloca em risco a sobrevivência de diversos animais no país.

Um dos principais fatores que contribuem para esse problema é a destruição dos habitats naturais. Quando florestas são derrubadas ou atingidas por queimadas, muitos animais perdem seus locais de abrigo e alimentação, sendo obrigados a procurar outros espaços para sobreviver. Essa situação pode ser relacionada ao pensamento do biólogo Edward O. Wilson, conhecido por seus estudos sobre a biodiversidade e a importância da preservação das diferentes formas de vida. Nesse sentido, a destruição dos ambientes naturais não prejudica apenas os animais, mas também interfere no funcionamento dos ecossistemas.

Outro problema que merece atenção é a caça e o tráfico ilegal de animais silvestres. Muitas espécies são capturadas para serem vendidas ou mantidas em cativeiro, o que reduz suas populações e prejudica a reprodução dos animais. Além disso, cada espécie possui uma função na natureza, como a dispersão de sementes e o controle de outras populações. Quando esses animais desaparecem, o equilíbrio ambiental também pode ser afetado, trazendo consequências para todo o ecossistema.

Diante dessa situação, o Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (Ibama) deve intensificar a fiscalização das áreas de preservação e combater o tráfico de animais, por meio de operações frequentes e aplicação de multas aos responsáveis por essas práticas. Paralelamente, as escolas devem desenvolver projetos de educação ambiental, com palestras e atividades que mostrem a importância da fauna brasileira e os riscos da destruição dos habitats. Dessa maneira, será possível reduzir as ameaças às espécies e preservar a biodiversidade do país para as próximas gerações.`
  },
  {
    numero: 12,
    titulo: "Migração e acolhimento no Brasil",
    previa: "Chegar em outro país não resolve tudo. Idioma, emprego e preconceito ainda dificultam a vida de quem migra.",
    texto: `A chegada de imigrantes e refugiados ao Brasil representa, para muitas pessoas, a oportunidade de fugir de conflitos, dificuldades econômicas e situações de risco em seus países de origem. Porém, encontrar um novo lugar para viver não significa que a adaptação será fácil. A dificuldade com o idioma, a falta de oportunidades de trabalho e o preconceito acabam dificultando a integração dessas pessoas, fazendo com que muitas continuem vivendo em situações de vulnerabilidade mesmo depois de chegar ao país.

Um dos principais obstáculos enfrentados por esses grupos é a dificuldade de conseguir emprego e ter acesso a serviços básicos. Muitas vezes, mesmo possuindo experiência profissional, os imigrantes encontram problemas para validar seus documentos e comprovar suas qualificações. Essa situação pode ser relacionada ao pensamento do filósofo Jacques Derrida, que discutiu a ideia de hospitalidade e os desafios de acolher pessoas diferentes em uma sociedade. Nesse sentido, receber alguém em um país não deve significar apenas permitir sua entrada, mas também oferecer condições para que essa pessoa consiga reconstruir sua vida com dignidade.

Outro problema que dificulta esse processo é o preconceito enfrentado pelos estrangeiros. A diferença de idioma, cultura e costumes pode fazer com que essas pessoas sejam tratadas de maneira desigual, prejudicando sua convivência com a população local. Além disso, crianças imigrantes podem encontrar dificuldades para acompanhar as atividades escolares quando não recebem apoio para aprender o português. Dessa forma, a falta de acolhimento acaba aumentando o isolamento social e dificultando a construção de uma nova vida no Brasil.

Para mudar essa realidade, as secretarias municipais de assistência social devem ampliar os centros de acolhimento para imigrantes e refugiados, oferecendo cursos gratuitos de português, orientação sobre documentação e encaminhamento para oportunidades de emprego. Além disso, o Ministério dos Direitos Humanos e da Cidadania deve promover campanhas contra a xenofobia, por meio de ações educativas e parcerias com instituições locais, buscando diminuir o preconceito e incentivar o respeito às diferentes culturas. Assim, será possível facilitar a adaptação dos estrangeiros e garantir que o Brasil seja um país onde essas pessoas possam reconstruir suas vidas com dignidade.`
  },
  {
    numero: 13,
    titulo: "El Niño e eventos climáticos extremos",
    previa: "Enchentes, ondas de calor e deslizamentos estão mais frequentes. A falta de planejamento das cidades piora o estrago.",
    texto: `As mudanças climáticas têm provocado situações cada vez mais preocupantes em diversas regiões do Brasil, como enchentes, ondas de calor e deslizamentos de terra. Apesar de esses fenômenos estarem relacionados às condições naturais, seus impactos são agravados pela falta de planejamento das cidades e pela ocupação desorganizada dos espaços urbanos. Dessa forma, a ausência de medidas preventivas coloca em risco a segurança de milhares de pessoas, principalmente daquelas que vivem em regiões mais vulneráveis.

Um dos fatores que contribuem para esse problema é a forma como as cidades brasileiras são construídas. A retirada de áreas verdes e o excesso de concreto dificultam a absorção da água da chuva pelo solo, aumentando os riscos de alagamentos. Essa situação pode ser relacionada aos estudos do geógrafo Milton Santos, que analisou como a organização do espaço urbano reflete as desigualdades sociais. Nesse sentido, a falta de infraestrutura e de planejamento acaba fazendo com que determinadas regiões sofram muito mais com os efeitos dos fenômenos climáticos.

Outro ponto preocupante é a falta de preparo para enfrentar situações de emergência. Muitas comunidades estão localizadas próximas a encostas e margens de rios, onde existe maior risco de deslizamentos e enchentes. Quando não há sistemas eficientes de alerta e planos de evacuação, os moradores acabam tendo pouco tempo para proteger suas famílias. Além dos prejuízos materiais, essas situações podem causar mortes, deixar pessoas desabrigadas e dificultar a recuperação das cidades.

Diante desse cenário, as prefeituras, com apoio das universidades públicas, devem desenvolver projetos de adaptação climática, por meio da ampliação de áreas verdes, melhorias nos sistemas de drenagem e recuperação de espaços próximos aos rios. Além disso, a Defesa Civil deve fortalecer os sistemas de alerta e organizar treinamentos nas comunidades que vivem em áreas de risco, orientando os moradores sobre como agir durante situações de emergência. Dessa maneira, será possível diminuir os impactos dos fenômenos climáticos e tornar as cidades brasileiras mais preparadas e seguras para a população.`
  },
  {
    numero: 14,
    titulo: "Lixo eletrônico e consumo de tecnologia",
    previa: "Trocar de celular o tempo todo aumentou o lixo eletrônico. Muita gente não sabe onde descartar o aparelho velho.",
    texto: `A tecnologia trouxe diversas facilidades para a sociedade, mas também mudou a maneira como as pessoas consomem aparelhos eletrônicos. A troca frequente de celulares e computadores, muitas vezes motivada pelo lançamento de novos modelos, tem aumentado a quantidade de lixo eletrônico produzido no Brasil. O problema é que muitos desses equipamentos são descartados de forma incorreta, causando prejuízos ao meio ambiente e colocando em risco a saúde da população.

Um dos fatores que contribuem para essa situação é o incentivo ao consumo constante. Muitas empresas lançam novos produtos em pouco tempo, fazendo com que os consumidores sintam a necessidade de trocar aparelhos que ainda poderiam ser utilizados. Essa realidade pode ser relacionada ao conceito de sociedade do consumo, discutido pelo sociólogo Colin Campbell, que analisa como o desejo por novidades influencia os hábitos de compra. Dessa forma, a busca constante por produtos mais modernos acaba aumentando o descarte de equipamentos que ainda poderiam ter uma vida útil maior.

Além do consumo exagerado, a falta de locais adequados para o descarte também agrava o problema. Muitas pessoas não sabem onde entregar aparelhos antigos e acabam jogando baterias e componentes eletrônicos no lixo comum. No entanto, esses materiais podem conter substâncias prejudiciais ao solo e à água quando não recebem o tratamento correto. Assim, a falta de informação e de estrutura para a reciclagem faz com que os impactos do consumo tecnológico atinjam toda a sociedade.

Para diminuir esse problema, o Ministério do Meio Ambiente e Mudança do Clima deve ampliar os programas de coleta de resíduos eletrônicos, em parceria com empresas do setor, por meio da instalação de pontos de entrega em locais de fácil acesso. Além disso, o Procon deve fiscalizar práticas comerciais que dificultem o conserto dos aparelhos e orientar os consumidores sobre seus direitos relacionados à assistência técnica. Dessa maneira, será possível reduzir o descarte incorreto, incentivar o reaproveitamento de materiais e diminuir os danos ambientais causados pelo consumo tecnológico.`
  },
  {
    numero: 15,
    titulo: "Respeito às diferenças e conflitos sociais",
    previa: "Conviver com quem pensa e vive diferente não é automático. A falta de empatia alimenta preconceito e conflito.",
    texto: `Conviver com pessoas que possuem opiniões, culturas e crenças diferentes faz parte da vida em sociedade. Entretanto, essa convivência nem sempre acontece de maneira respeitosa, já que ainda existem muitos casos de preconceito, discriminação e violência contra grupos que não seguem determinados padrões. Nesse cenário, a falta de empatia e a dificuldade de aceitar a diversidade contribuem para o aumento dos conflitos sociais e dificultam a construção de uma sociedade mais justa.

Uma das principais causas desse problema é a dificuldade de compreender realidades diferentes da própria. A filósofa Martha Nussbaum, ao discutir a importância da educação para a cidadania, destaca o papel da empatia na formação de indivíduos capazes de respeitar outras perspectivas. Essa ideia se relaciona à realidade brasileira, pois muitas pessoas acabam reproduzindo preconceitos por não conhecerem outras culturas e formas de viver. Assim, a falta de diálogo contribui para que as diferenças sejam vistas como motivos de afastamento, em vez de oportunidades de aprendizado.

As consequências da intolerância também podem ser percebidas na exclusão de determinados grupos sociais. Pessoas que sofrem preconceito por sua origem, religião, aparência ou condição social muitas vezes enfrentam dificuldades para estudar, trabalhar e participar de espaços públicos. Além disso, discursos de ódio divulgados nas redes sociais podem aumentar as divisões e incentivar atitudes violentas. Dessa maneira, quando o respeito deixa de fazer parte das relações sociais, a convivência se torna mais difícil e os conflitos tendem a se intensificar.

Para enfrentar esse problema, o Ministério da Educação deve incentivar a inclusão de atividades sobre diversidade cultural e direitos humanos nas escolas, por meio de debates, projetos e ações que estimulem o respeito às diferenças desde a infância. Paralelamente, as secretarias municipais de cultura devem organizar eventos e campanhas comunitárias que aproximem pessoas de diferentes origens e costumes, criando espaços de convivência e diálogo. Com essas medidas, será possível combater preconceitos, diminuir conflitos e construir uma sociedade mais respeitosa e democrática.`
  },
  {
    numero: 16,
    titulo: "Agro e equilíbrio com o meio ambiente",
    previa: "O agronegócio é forte na economia brasileira, mas a produção precisa caminhar junto com a preservação.",
    texto: `O agronegócio possui grande importância para a economia brasileira, sendo responsável por boa parte da produção de alimentos e pela geração de empregos. Entretanto, o crescimento da atividade agrícola também pode trazer consequências negativas quando acontece sem os cuidados necessários com o meio ambiente. Nesse sentido, o uso inadequado dos recursos naturais e a falta de incentivo a práticas sustentáveis dificultam o equilíbrio entre a produção e a preservação ambiental no Brasil.

Um dos principais obstáculos para alcançar esse equilíbrio é a dificuldade de alguns produtores em adotar métodos de cultivo mais sustentáveis. Muitas propriedades não possuem recursos financeiros ou orientação técnica para investir em tecnologias que diminuam o desperdício de água e os danos ao solo. Essa situação pode ser relacionada ao conceito de desenvolvimento sustentável, discutido pela pesquisadora Gro Harlem Brundtland, que defende o desenvolvimento econômico sem comprometer os recursos das futuras gerações. Dessa forma, produzir em grande quantidade não deve significar utilizar a natureza de maneira irresponsável.

Outro fator preocupante é a exploração excessiva dos recursos naturais. O desmatamento para ampliar áreas de plantio, o uso exagerado de água e a aplicação incorreta de produtos químicos podem prejudicar o solo e contaminar rios. Além de causar danos ambientais, essas práticas também ameaçam a própria agricultura, já que a qualidade da terra e a disponibilidade de água são essenciais para manter a produção ao longo dos anos. Assim, a falta de preservação pode trazer prejuízos tanto para a natureza quanto para os próprios produtores rurais.

Para mudar esse cenário, o Serviço Nacional de Aprendizagem Rural (SENAR), em parceria com a Empresa Brasileira de Pesquisa Agropecuária (Embrapa), deve ampliar os programas de capacitação para pequenos e médios produtores, oferecendo cursos gratuitos sobre economia de água, conservação do solo e técnicas de cultivo sustentável. Além disso, as instituições financeiras públicas devem facilitar o acesso a linhas de crédito destinadas à modernização sustentável das propriedades. Com essas medidas, será possível incentivar uma produção agrícola mais responsável, preservar os recursos naturais e garantir melhores condições para as próximas gerações.`
  },
  {
    numero: 17,
    titulo: "Desigualdades entre as regiões do Brasil",
    previa: "O local onde uma pessoa nasce ainda pesa demais nas oportunidades que ela vai ter ao longo da vida.",
    texto: `O Brasil possui grandes diferenças entre suas regiões, principalmente quando se trata de acesso à educação, saúde, emprego e infraestrutura. Enquanto algumas cidades concentram investimentos e oportunidades, outras ainda enfrentam dificuldades para oferecer serviços básicos à população. Essa realidade mostra que o desenvolvimento do país acontece de maneira desigual, fazendo com que o local de nascimento de uma pessoa influencie diretamente suas condições de vida.

Um dos fatores que contribuem para esse problema é a concentração de investimentos nas regiões economicamente mais desenvolvidas. A falta de indústrias, universidades e oportunidades de trabalho em determinadas localidades dificulta o crescimento de suas economias. Essa situação pode ser relacionada ao pensamento do economista Celso Furtado, que estudou o desenvolvimento econômico brasileiro e as desigualdades entre as regiões do país. Nesse sentido, a concentração de recursos em poucos centros acaba dificultando o desenvolvimento de outras áreas e mantendo diferenças que poderiam ser reduzidas com políticas de incentivo.

Outro problema causado por essa desigualdade é a migração de pessoas em busca de melhores condições de vida. Muitos jovens deixam suas cidades para estudar ou conseguir emprego em regiões que oferecem mais oportunidades. Como consequência, municípios menores podem perder parte de sua população economicamente ativa, dificultando ainda mais seu crescimento. Além disso, a falta de saneamento, transporte e atendimento médico adequado prejudica a qualidade de vida de quem permanece nessas localidades, aumentando a distância entre as diferentes regiões brasileiras.

Para reduzir esse cenário, o Ministério da Integração e do Desenvolvimento Regional deve ampliar os investimentos em infraestrutura nos municípios menos desenvolvidos, por meio de parcerias com os governos estaduais e da criação de projetos que fortaleçam a economia local. Além disso, o Ministério do Desenvolvimento, Indústria, Comércio e Serviços deve oferecer incentivos para empresas que instalarem unidades produtivas fora dos grandes centros, estimulando a geração de empregos e a circulação de renda. Dessa forma, será possível diminuir as diferenças regionais e ampliar as oportunidades para a população em todo o território brasileiro.`
  }
];
/**
 * APP.JS — Interações, navegação e modais
 * Minha Jornada · Meu Legado
 */

(function () {
  "use strict";

  /* ---------- Helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function openModal(modal) {
    modal.hidden = false;
    // force reflow for transition
    void modal.offsetWidth;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    // focus trap start
    const focusable = modal.querySelector("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
    if (focusable) focusable.focus();
  }

  function closeModal(modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(() => {
      if (!modal.classList.contains("open")) {
        modal.hidden = true;
      }
    }, 350);
  }

  /* ---------- Header scroll state ---------- */
  const header = $("#site-header");
  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    updateActiveNav();
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Active nav by section ---------- */
  const sections = $$("main .section");
  const navLinks = $$(".nav-link");

  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;
    let current = "abertura";
    sections.forEach((sec) => {
      if (sec.offsetTop <= scrollPos) {
        current = sec.dataset.section;
      }
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.section === current);
    });
  }

  /* ---------- Mobile menu ---------- */
  const menuToggle = $("#menu-toggle");
  const mobileMenu = $("#mobile-menu");

  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    mobileMenu.hidden = false;
    if (!expanded) {
      requestAnimationFrame(() => mobileMenu.classList.add("open"));
    } else {
      mobileMenu.classList.remove("open");
      setTimeout(() => { mobileMenu.hidden = true; }, 350);
    }
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      mobileMenu.classList.remove("open");
      setTimeout(() => { mobileMenu.hidden = true; }, 350);
    });
  });

  /* ---------- Smooth scroll for internal links ---------- */
  $$('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (id.length > 1) {
        const target = $(id);
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    });
  });

  /* ---------- Cover buttons ---------- */
  $("#btn-entrar-historia").addEventListener("click", () => {
    const target = $("#memorias");
    const top = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: "smooth" });
  });

  $("#btn-explorar-textos").addEventListener("click", () => {
    const target = $("#redacoes");
    const top = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: "smooth" });
  });

  /* ---------- Memory modal ---------- */
  const memoryModal = $("#memory-modal");
  const memoryCards = $$(".memory-card");

  function openMemory(id) {
    const data = MEMORIAS.find((m) => m.id === id);
    if (!data) return;

    $("#memory-modal-number").textContent = data.numero;
    $("#memory-modal-title").textContent = data.titulo;
    $("#memory-modal-period").textContent = data.periodo;
    $("#memory-modal-text").innerHTML = data.historia;

    openModal(memoryModal);
  }

  memoryCards.forEach((card) => {
    const open = () => openMemory(Number(card.dataset.chapter));
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });

  /* ---------- Essay library rendering ---------- */
  const libraryTable = $("#library-table");
  let currentEssayIndex = 0;

  function renderLibrary() {
    libraryTable.innerHTML = REDACOES.map((r) => `
      <article class="doc-card" data-index="${r.numero - 1}" tabindex="0" role="button"
               aria-label="Abrir redação ${String(r.numero).padStart(2, "0")}: ${r.titulo}">
        <div class="doc-seal">${String(r.numero).padStart(2, "0")}</div>
        <div class="doc-number">${String(r.numero).padStart(2, "0")}</div>
        <h3 class="doc-title">${r.titulo}</h3>
        <p class="doc-previa">${r.previa}</p>
        <div class="doc-meta">
          <span>COLEÇÃO 2009–2026</span>
          <span class="doc-cta">LER DOCUMENTO →</span>
        </div>
      </article>
    `).join("");

    $$(".doc-card", libraryTable).forEach((card) => {
      const open = () => openEssay(Number(card.dataset.index));
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
    });
  }

  /* ---------- Essay modal ---------- */
  const essayModal = $("#essay-modal");

  function openEssay(index) {
    currentEssayIndex = index;
    updateEssayModal();
    openModal(essayModal);
  }

  function updateEssayModal() {
    const r = REDACOES[currentEssayIndex];
    if (!r) return;

    $("#essay-modal-number").textContent = String(r.numero).padStart(2, "0");
    $("#essay-modal-progress").textContent = `${String(r.numero).padStart(2, "0")} DE 17`;
    $("#essay-modal-title").textContent = r.titulo;

    // Split text into paragraphs
    const paragraphs = r.texto
      .trim()
      .split(/\n\n+/)
      .map((p) => `<p>${p.trim()}</p>`)
      .join("");
    $("#essay-modal-body").innerHTML = paragraphs;

    // Scroll body to top
    $("#essay-modal-body").scrollTop = 0;

    // Nav buttons state
    $("#essay-prev").disabled = currentEssayIndex === 0;
    $("#essay-next").disabled = currentEssayIndex === REDACOES.length - 1;
    $("#essay-prev").style.opacity = currentEssayIndex === 0 ? "0.4" : "1";
    $("#essay-next").style.opacity = currentEssayIndex === REDACOES.length - 1 ? "0.4" : "1";
  }

  $("#essay-prev").addEventListener("click", () => {
    if (currentEssayIndex > 0) {
      currentEssayIndex--;
      updateEssayModal();
    }
  });

  $("#essay-next").addEventListener("click", () => {
    if (currentEssayIndex < REDACOES.length - 1) {
      currentEssayIndex++;
      updateEssayModal();
    }
  });

  /* ---------- Close modals ---------- */
  function setupCloseHandlers(modal, type) {
    modal.querySelectorAll(`[data-close="${type}"]`).forEach((el) => {
      el.addEventListener("click", () => closeModal(modal));
    });
  }
  setupCloseHandlers(memoryModal, "memory");
  setupCloseHandlers(essayModal, "essay");

  // ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (memoryModal.classList.contains("open")) closeModal(memoryModal);
      if (essayModal.classList.contains("open")) closeModal(essayModal);
      if (mobileMenu.classList.contains("open")) {
        menuToggle.setAttribute("aria-expanded", "false");
        mobileMenu.classList.remove("open");
        setTimeout(() => { mobileMenu.hidden = true; }, 350);
      }
    }
  });

  /* ---------- Epilogue reveal ---------- */
  const btnRevelar = $("#btn-revelar-epilogo");
  const epilogoContent = $("#epilogo-content");
  const epilogoReveal = $("#epilogo-reveal");

  btnRevelar.addEventListener("click", () => {
    epilogoReveal.hidden = true;
    epilogoContent.hidden = false;
    // small delay to allow animation
    requestAnimationFrame(() => {
      epilogoContent.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });

  /* ---------- Init ---------- */
  renderLibrary();
  onScroll();

  // Respect reduced motion for any future JS animations
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    document.documentElement.classList.add("reduced-motion");
  }
})();
