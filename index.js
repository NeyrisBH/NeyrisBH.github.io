window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "15px 10px";
    document.getElementById("logo").style.height = "40px";
  } else {
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("logo").style.height = "60px";
    modal.style.display = 'none';
  }
}


function resFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
}


document.addEventListener('DOMContentLoaded', function() {
  var galleryImages = document.getElementsByClassName('img-modal');
  var modal = document.getElementById('modal');
  var close = document.getElementsByClassName('close')[0];

  for (var i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener('click', function() {
      var altText = this.alt;
      showModal(altText);
    });
  }

  close.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  function showModal(imageAlt) {
    var modalTitle = document.getElementById('modal-title');
    var modalSubtitle = document.getElementById('modal-subtitle');
    var modalDescription = document.getElementById('modal-description');
    var modalTable = document.getElementById('modal-table');
    var modalImage = document.getElementById('modal-image');
  
    if (imageAlt === 'Imagen 1') {
      modalTitle.textContent = 'María Carolina Castillo';
      modalSubtitle.textContent = 'Presidente Probogotá';
      modalDescription.textContent = 'Abogada de la Universidad Externado de Colombia y magíster en Derecho Constitucional y Administrativo de la Universidad de Barcelona, España. Cuenta con más de 20 años de experiencia en los sectores público y privado: entre 2017 y 2018 se desempeñó como gerente general de la Empresa de Acueducto y Alcantarillado de Bogotá; entre 2016 y 2017 fue secretaria distrital del Hábitat, y entre 2012 y 2015 estuvo en el Ministerio de Vivienda, Ciudad y Territorio como directora de Programas y viceministra de Agua Potable y saneamiento Básico. Además, entre 2008 y 2012 estuvo a cargo de las direcciones de Asuntos Legislativos y de Democracia y Participación Ciudadana del Ministerio del Interior. También, se desempeñó como fiscal delegada ante los jueces municipales en la Fiscalía General de la Nación y como docente de Derecho Constitucional en la Universidad Externado de Colombia.';
      modalTable.innerHTML = '<table><tr><th>Encabezado 1</th><th>Encabezado 2</th></tr><tr><td>Dato 1</td><td>Dato 2</td></tr></table>';
      modalImage.src = './images/team1.webp';
      modalImage.alt = 'Imagen 1';
    } else if (imageAlt === 'Imagen 2') {
      modalTitle.textContent = 'Jesús Dulce';
      modalSubtitle.textContent = 'Desarrollo Económico y futuro del empleo';
      modalDescription.textContent = 'Internacionalista de la Universidad del Rosario, con especialización en Gestión Pública de la Escuela Superior de Administración Pública y estudios de Desarrollo Económico Regional de la Universidad de Yonsei (Corea del Sur). Con más de 12 años de experiencia en el sector público, su trayectoria ha hecho énfasis en temas de gestión y formulación de políticas públicas, cooperación, diálogo social, desarrollo rural y posconflicto, en entidades como la Presidencia de la República, los ministerios de Interior, Vivienda, Ambiente, Agricultura y en la Agencia de Desarrollo Rural, ejerciendo, roles de asesor de despacho, coordinador de políticas públicas, relación con sector privado y mesas de diálogo regionales. En el nivel distrital, ha trabajado con entidades como la Secretaría de Educación, la Empresa de Acueducto y Alcantarillado de Bogotá y las Secretarías de Hábitat y Planeación, asesorando estrategias de diálogo social con población vulnerable en proyectos de urbanismo.';
      modalTable.innerHTML = '<table><tr><th>Encabezado 1</th><th>Encabezado 2</th></tr><tr><td>Dato 1</td><td>Dato 2</td></tr></table>';
      modalImage.src = './images/team2.webp';
      modalImage.alt = 'Imagen 2';
    } else if (imageAlt === 'Imagen 3') {
      modalTitle.textContent = 'Bibiana Rodríguez';
      modalSubtitle.textContent = 'Desarrollo Urbano Sostenible';
      modalDescription.textContent = 'Arquitecta de la Universidad Piloto de Colombia, con título de Maestría en Gestión Urbanística de la Universidad Politécnica de Catalunya en Barcelona. Actualmente lidera los temas de Desarrollo Urbano y Movilidad Sostenible en Probogotá Región. 24 años de experiencia profesional orientados a la gestión urbanística en el sector público, dirigida a la formulación, coordinación y dirección de programas y proyectos estratégicos así como en la estructuración de proyectos de política pública y la aplicación de instrumentos de planificación y gestión a nivel distrital y nacional. Fue asesora de Empresa de Renovación Urbana - ERU donde apoyó la gestión urbanística de los proyectos de Renovación urbana Manzana 5 y Estación Central; y del Ministerio de Vivienda Ciudad y Territorio, en la formulación de la política de construcción sostenible, implementación de los programas de las 100 Mil Viviendas y Territorios Inteligentes.';
      modalTable.innerHTML = '<table><tr><th>Encabezado 1</th><th>Encabezado 2</th></tr><tr><td>Dato 1</td><td>Dato 2</td></tr></table>';
      modalImage.src = './images/team3.webp';
      modalImage.alt = 'Imagen 2';
    } else if (imageAlt === 'Imagen 4') {
      modalTitle.textContent = 'César Restrepo';
      modalSubtitle.textContent = 'Seguridad Urbana';
      modalDescription.textContent = 'Profesional en Gobierno y Relaciones Internacionales de la Universidad Externado de Colombia, con maestría en Estudios Estratégicos y Seguridad Internacional de la Universidad de Granada de España. Con cursos calificados en Reforma al Sistema de Seguridad; Desarme, Desmovilización y Reinserción, Mediación, y Negociación Avanzada. Tiene 22 años de experiencia en análisis, evaluación y gestión de asuntos de seguridad y defensa nacional. Es experto en temas regionales colombianos, de América Latina y asuntos del hemisferio occidental. Trabajó en el Ministerio de Defensa Nacional como Director de Estudios Estratégicos y fue el representante del Ministro de Defensa en la negociación del DDR de los acuerdos de La Habana.';
      modalTable.innerHTML = '<table><tr><th>Encabezado 1</th><th>Encabezado 2</th></tr><tr><td>Dato 1</td><td>Dato 2</td></tr></table>';
      modalImage.src = './images/team4.webp';
      modalImage.alt = 'Imagen 2';
    } else if (imageAlt === 'Imagen 5') {
      modalTitle.textContent = 'Adriana Peñalosa';
      modalSubtitle.textContent = 'Cooperación internacional';
      modalDescription.textContent = 'Economista de la Universidad Externado de Colombia especializada en gerencia financiera con más de 25 años de experiencia en manejo de temas estratégicos en diversos sectores y relacionamiento entre los sectores público y privado, nacional e internacional. Ocupó la gerencia financiera de Agroabibe S.A., empresa productora de banano, donde manejó crisis como el paro laboral más largo que tuvo esa zona bananera. Trabajó en el Departamento Nacional de Planeación (DNP) en la Unidad de Inversiones y Finanzas Públicas en la División de Estudios Financieros de Entidades Descentralizadas, y en la División de Crédito Externo e Interno, principalmente en el sector Transporte. Durante 15 años laboró en el Ministerio de Defensa Nacional inicialmente como coordinadora de un Convenio entre el PNUD y el Ministerio, mediante el cual se realizaron reformas orgánicas al Ministerio, así como al régimen de carrera de los uniformados y de los civiles del sector, y las normas sobre Justicia Penal Militar.';
      modalTable.innerHTML = '<table><tr><th>Encabezado 1</th><th>Encabezado 2</th></tr><tr><td>Dato 1</td><td>Dato 2</td></tr></table>';
      modalImage.src = './images/team5.webp';
      modalImage.alt = 'Imagen 2';
    } else if (imageAlt === 'Imagen 6') {
      modalTitle.textContent = 'Adriana Vivas';
      modalSubtitle.textContent = 'Comunicaciones';
      modalDescription.textContent = 'Comunicadora Social y Periodista, con especialización en Comunicación Estratégica, con 25 años de experiencia en la creación y ejecución de estrategias de comunicación, manejo de crisis, relacionamiento estratégico y reputación, en el sector público y privado. Fue Directora de Comunicaciones del Ministerio de Defensa durante 9 años, tiempo en el cual creó la Política de Comunicaciones para el Sector Defensa y dirigió la estrategia de comunicaciones de resultados militares como la Operación Jaque y la baja de cabecillas estratégicos, entre muchos otros resultados, así como situaciones de crisis de la Fuerza Pública como los falsos positivos. También dirigió las comunicaciones del Ministerio de Justicia, de Educación y de Salud, entre otras entidades de importancia nacional. En Mineducación creó y desarrolló campañas como la del Gen Ciudadano, dirigida a fomentar en los estudiantes de los colegios públicos los valores ciudadanos, la empatía y la sana convivencia.';
      modalTable.innerHTML = '<table><tr><th>Encabezado 1</th><th>Encabezado 2</th></tr><tr><td>Dato 1</td><td>Dato 2</td></tr></table>';
      modalImage.src = './images/team6.webp';
      modalImage.alt = 'Imagen 2';
    } else if (imageAlt === 'Imagen 7') {
      modalTitle.textContent = 'Martín Anzellini';
      modalSubtitle.textContent = 'Ciudades Inteligentes y Sostenibles';
      modalDescription.textContent = 'Arquitecto -MScArch, Accademia di Architettura di Mendrisio-, diseñador y coordinador de proyectos de diferentes escalas y características en el sector privado, la academia y en el sector público. Consultor técnico y estratégico en proyectos de arquitectura, urbanismo y desarrollo territorial como la Facultad de Música de la Universidad de los Andes, el reasentamiento del ETCR de Charras, la Escuela Rural de Mettu Terhu, la Sede del Concejo Distrital de Bogotá, el Conjunto de Laboratorios de la Escuela Colombiana de Ingeniería, la Dexter Street Plaza, el Centro Comunitario El Morrocoy, la Salle Villageoise de Echandens y la Sede del Chiasso Jazz Festival. Como Asesor del Despacho de la Secretaría Distrital de Planeación, fue gerente del Proyecto Integral TransMiCable de Ciudad Bolívar y participó en la conceptualización del Bronx Distrito Creativo, la revitalización de los humedales y la Primera Línea del Metro de Bogotá.';
      modalTable.innerHTML = '<table><tr><th>Encabezado 1</th><th>Encabezado 2</th></tr><tr><td>Dato 1</td><td>Dato 2</td></tr></table>';
      modalImage.src = './images/team7.webp';
      modalImage.alt = 'Imagen 2';
    } else if (imageAlt === 'Imagen 8') {
      modalTitle.textContent = 'Cristina Hermida';
      modalSubtitle.textContent = 'Desarrollo Urbano Sostenible';
      modalDescription.textContent = 'Cristina Hermida es una profesional dedicada al campo del Desarrollo Urbano Sostenible, con amplia experiencia en el diseño y ejecución de proyectos que promueven prácticas sostenibles en entornos urbanos. Con una sólida formación en el área de Desarrollo Urbano, Cristina ha trabajado en diversos proyectos y organizaciones orientados a crear ciudades más sostenibles, resilientes y amigables con el medio ambiente. Su experiencia abarca desde la planificación urbana hasta la implementación de estrategias de transporte sostenible, gestión de recursos naturales, energías renovables y diseño de espacios públicos inclusivos. Cristina se ha destacado por su capacidad para coordinar y colaborar con diferentes actores, incluyendo gobiernos locales, organizaciones no gubernamentales y comunidades, con el fin de impulsar el desarrollo urbano sostenible y mejorar la calidad de vida en las ciudades.';
      modalTable.innerHTML = '<table><tr><th>Encabezado 1</th><th>Encabezado 2</th></tr><tr><td>Dato 1</td><td>Dato 2</td></tr></table>';
      modalImage.src = './images/team8.webp';
      modalImage.alt = 'Imagen 2';
    } else if (imageAlt === 'Imagen 9') {
      modalTitle.textContent = 'Pablo Velásquez';
      modalSubtitle.textContent = 'Desarrollo Económico y futuro del empleo';
      modalDescription.textContent = 'Pablo Velásquez es un profesional especializado en el campo del Desarrollo Económico y Futuro del Empleo, con una sólida trayectoria en la implementación de estrategias innovadoras para impulsar el crecimiento económico y fomentar oportunidades laborales en diferentes sectores. Con una amplia experiencia en el análisis de tendencias económicas y laborales, Pablo ha trabajado en proyectos orientados a promover la creación de empleo sostenible, el fomento del emprendimiento y la adaptación de las empresas a los cambios tecnológicos y sociales. Pablo ha colaborado estrechamente con gobiernos, instituciones académicas y empresas, buscando soluciones creativas para los desafíos del mercado laboral en la era digital. Su enfoque se centra en el desarrollo de políticas y programas que impulsen la formación de habilidades relevantes, la inclusión de grupos vulnerables y la creación de ecosistemas emprendedores.';
      modalTable.innerHTML = '<table><tr><th>Encabezado 1</th><th>Encabezado 2</th></tr><tr><td>Dato 1</td><td>Dato 2</td></tr></table>';
      modalImage.src = './images/team9.webp';
      modalImage.alt = 'Imagen 2';
    } else if (imageAlt === 'Imagen 10') {
      modalTitle.textContent = 'Juan Martínez';
      modalSubtitle.textContent = 'Desarrollo Urbano Sostenible';
      modalDescription.textContent = 'Juan Martínez es un experto en Desarrollo Urbano Sostenible, con una sólida experiencia en la planificación, diseño e implementación de proyectos y políticas que promueven un crecimiento urbano equilibrado, respetuoso con el medio ambiente y socialmente inclusivo. Con una pasión por crear comunidades sostenibles, Juan ha trabajado en estrecha colaboración con gobiernos locales, organizaciones no gubernamentales y el sector privado para desarrollar estrategias integrales de desarrollo urbano. Ha liderado proyectos de revitalización de áreas urbanas, promoviendo la conservación de recursos naturales, la eficiencia energética, la movilidad sostenible y el acceso equitativo a servicios básicos. Juan es un defensor de la participación ciudadana y la colaboración multiactor en la toma de decisiones urbanas. Ha facilitado procesos de consulta y diálogo con la comunidad para garantizar que los proyectos de desarrollo sean inclusivos y respondan a las necesidades reales de los residentes.';
      modalTable.innerHTML = '<table><tr><th>Encabezado 1</th><th>Encabezado 2</th></tr><tr><td>Dato 1</td><td>Dato 2</td></tr></table>';
      modalImage.src = './images/team10.webp';
      modalImage.alt = 'Imagen 2';
    } else if (imageAlt === 'Imagen 11') {
      modalTitle.textContent = 'Paula Gabriela Soto';
      modalSubtitle.textContent = 'Desarrollo Urbano Sostenible';
      modalDescription.textContent = 'Paula Gabriela Soto es una profesional dedicada al Desarrollo Urbano Sostenible, con una amplia experiencia en la planificación y gestión de proyectos urbanos que promueven el crecimiento equitativo, resiliente y sostenible de las ciudades. Con una formación en Arquitectura y Urbanismo, Paula ha trabajado en diversos proyectos a nivel nacional e internacional, colaborando estrechamente con gobiernos locales, organizaciones no gubernamentales y el sector privado. Su enfoque se basa en la creación de entornos urbanos que sean socialmente inclusivos, respetuosos con el medio ambiente y económicamente viables. Paula es una defensora apasionada de la planificación urbana participativa, involucrando a las comunidades locales en la toma de decisiones y fomentando la colaboración entre diferentes actores. Ha liderado procesos de diseño y desarrollo de planes maestros urbanos, promoviendo la integración de infraestructuras sostenibles, espacios verdes, transporte eficiente y viviendas asequibles.';
      modalTable.innerHTML = '<table><tr><th>Encabezado 1</th><th>Encabezado 2</th></tr><tr><td>Dato 1</td><td>Dato 2</td></tr></table>';
      modalImage.src = './images/team11.webp';
      modalImage.alt = 'Imagen 2';
    } else if (imageAlt === 'Imagen 12') {
      modalTitle.textContent = 'Juanita Mesa';
      modalSubtitle.textContent = 'Seguridad Urbana';
      modalDescription.textContent = 'DJuanita Mesa es una experta en Seguridad Urbana, con una sólida experiencia en el diseño y la implementación de estrategias para garantizar entornos urbanos seguros y protegidos. Con una formación en Criminología y estudios especializados en Seguridad Ciudadana, Juanita ha trabajado en diversas ciudades del país, colaborando con gobiernos locales, fuerzas de seguridad y organizaciones de la sociedad civil. Su enfoque se centra en la prevención del delito, la gestión del riesgo y la promoción de la convivencia pacífica en los espacios urbanos. Juanita ha liderado proyectos de diagnóstico y análisis de la situación de seguridad en diferentes contextos urbanos. Utilizando metodologías participativas, ha identificado los factores de riesgo y las necesidades específicas de cada comunidad, desarrollando planes de acción adaptados a las características de cada lugar.';
      modalTable.innerHTML = '<table><tr><th>Encabezado 1</th><th>Encabezado 2</th></tr><tr><td>Dato 1</td><td>Dato 2</td></tr></table>';
      modalImage.src = './images/team12.webp';
      modalImage.alt = 'Imagen 2';
    } else if (imageAlt === 'Imagen 13') {
      modalTitle.textContent = 'Nicolás Gutiérrez';
      modalSubtitle.textContent = 'Ciudades inteligentes y sostenibles';
      modalDescription.textContent = 'Nicolás Gutiérrez es un especialista en el desarrollo de Ciudades Inteligentes y Sostenibles, con amplia experiencia en la implementación de soluciones tecnológicas y prácticas sostenibles para mejorar la calidad de vida en entornos urbanos. Con una formación en Ingeniería Ambiental y estudios especializados en Innovación Urbana, Nicolás ha trabajado en proyectos a nivel nacional e internacional, colaborando estrechamente con gobiernos locales, empresas privadas y organizaciones sin fines de lucro. Su enfoque se centra en el uso de tecnologías de vanguardia, como el Internet de las Cosas (IoT), la inteligencia artificial y el análisis de datos, para optimizar la gestión de los recursos y servicios urbanos. Nicolás ha implementado sistemas de monitoreo ambiental en tiempo real, infraestructuras inteligentes y soluciones de movilidad sostenible, con el objetivo de reducir el impacto ambiental y mejorar la eficiencia en el uso de los recursos.';
      modalTable.innerHTML = '<table><tr><th>Encabezado 1</th><th>Encabezado 2</th></tr><tr><td>Dato 1</td><td>Dato 2</td></tr></table>';
      modalImage.src = './images/team13.webp';
      modalImage.alt = 'Imagen 2';
    } else if (imageAlt === 'Imagen 14') {
      modalTitle.textContent = 'Doris Jara';
      modalSubtitle.textContent = 'Contabilidad y finanzas';
      modalDescription.textContent = 'Contadora Pública con especialización en Ciencias Tributarias de la Universidad Central. Con más de 10 años de experiencia profesional en el sector privado desarrollando el proceso contable y financiero. Vinculada a ProBogotá desde su creación. Como experta en contabilidad, Doris tiene un profundo conocimiento de los principios contables y las normas financieras, lo que le permite realizar análisis precisos y detallados de los estados financieros, preparar informes financieros y llevar a cabo la auditoría interna. Además, tiene una amplia experiencia en el diseño e implementación de sistemas contables eficientes y en el manejo de los procesos de facturación, cuentas por pagar y cuentas por cobrar. En el ámbito financiero, Doris ha demostrado habilidades destacadas en la gestión de presupuestos, la proyección financiera y la planificación estratégica. Ha participado en la elaboración de informes financieros, análisis de costos y rentabilidad, así como en la evaluación de inversiones y la toma de decisiones financieras acertadas.';
      modalTable.innerHTML = '<table><tr><th>Encabezado 1</th><th>Encabezado 2</th></tr><tr><td>Dato 1</td><td>Dato 2</td></tr></table>';
      modalImage.src = './images/team14.webp';
      modalImage.alt = 'Imagen 2';
    } else if (imageAlt === 'Imagen 15') {
      modalTitle.textContent = 'Ana Clemencia Vela';
      modalSubtitle.textContent = 'Asistente de Presidencia';
      modalDescription.textContent = 'Ana Clemencia Vela es una profesional altamente capacitada y con una amplia experiencia en el rol de Asistente de Presidencia. Con una sólida formación académica y habilidades excepcionales en la gestión administrativa y organizativa, Ana ha sido un apoyo fundamental para la alta dirección y ha contribuido al éxito de las operaciones ejecutivas en diversas organizaciones. Como Asistente de Presidencia, Ana despliega una gran habilidad para manejar múltiples tareas y prioridades de manera efectiva. Es responsable de la coordinación de agendas, la organización de reuniones y eventos, y la gestión de la correspondencia y comunicaciones de la Presidencia. Su capacidad para mantener la confidencialidad, la discreción y la integridad en todas las actividades relacionadas con su rol es clave para establecer y mantener relaciones sólidas con clientes, socios y personal interno. Además de sus habilidades administrativas, Ana es una comunicadora excepcional y tiene un enfoque orientado al servicio al cliente.';
      modalTable.innerHTML = '<table><tr><th>Encabezado 1</th><th>Encabezado 2</th></tr><tr><td>Dato 1</td><td>Dato 2</td></tr></table>';
      modalImage.src = './images/team15.webp';
      modalImage.alt = 'Imagen 2';
    } else if (imageAlt === 'Imagen 16') {
      modalTitle.textContent = 'Ricardo García';
      modalSubtitle.textContent = 'Comunicaciones';
      modalDescription.textContent = 'Ricardo García es un comunicador estratégico con amplia experiencia en el campo de las Comunicaciones. Con una sólida formación académica y una pasión por transmitir mensajes efectivos, Ricardo ha trabajado en diversas organizaciones donde ha desarrollado y ejecutado estrategias de comunicación exitosas. Como especialista en Comunicaciones, Ricardo posee habilidades excepcionales en la creación de mensajes claros y persuasivos. Tiene la capacidad de adaptar la comunicación a diferentes públicos y canales, asegurando que el mensaje llegue de manera efectiva y genere el impacto deseado. Además, cuenta con experiencia en el manejo de crisis y situaciones delicadas, siendo capaz de gestionar la comunicación en momentos difíciles con profesionalismo y eficacia. Ricardo ha trabajado en diversas áreas de las Comunicaciones, incluyendo relaciones públicas, comunicación interna y externa, manejo de medios, marketing digital y gestión de contenidos.';
      modalTable.innerHTML = '<table><tr><th>Encabezado 1</th><th>Encabezado 2</th></tr><tr><td>Dato 1</td><td>Dato 2</td></tr></table>';
      modalImage.src = './images/team16.webp';
      modalImage.alt = 'Imagen 2';
    }   
    modal.style.display = 'block';
  }
});

