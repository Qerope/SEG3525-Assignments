export const translations = {
  en: {
   
    dashboardTitle: "Aviation Safety Dashboard",
    designInfo: "Design Info",
    backToDashboard: "Back to Dashboard",
    loading: "Loading data...",

   
    analysisMode: "Analysis Mode",
    comparisonMode: "Comparison Mode",
    singleMode: "Single Analysis Mode",

   
    step1ChooseType: "Step 1: Choose Analysis Type",
    step2ChooseValues: "Step 2: Select Values to Compare",
    selectFilter: "Select Filter Value",
    comparison: "Comparison",
    showAll: "Show All Data",
    allData: "All Data",

   
    timeRange: "Time Range",
    operator: "Operator",
    damageType: "Damage Type",
    aircraftType: "Aircraft Type",

   
    substantialDamage: "Substantial Damage",
    totalLoss: "Write-Off (Total Loss)",
    minorDamage: "No Damage / Minor",

   
    totalCrashes: "Total Crashes",
    totalFatalities: "Total Fatalities",
    avgFatalities: "Avg. Fatalities per Crash",
    fatalCrashes: "Fatal Crashes",
    year: "Year",

   
    crashes: "Crashes",
    percentage: "Percentage",
    showItem: "Show",
    fatalities: "Fatalities",
    crashesByYear: "Aviation Crashes and Fatalities Over Time",
    topAircraftTypes: "Aircraft Types by Crash Frequency",
    lineChartDescription:
      "Interactive timeline showing aviation crashes and fatalities. Use the brush at the bottom to zoom into specific time ranges, and click legend items to hide/show data series.",
    barChartDescription:
      "Interactive comparison of aircraft types by crash frequency. Click legend items to hide/show different data series and hover for detailed information.",
    damageSeverityDistribution: "Damage Severity Distribution",
    pieChartDescription:
      "Interactive pie chart displaying the distribution of crash severities. Hover over segments for detailed percentages.",

   
    dataSource: "Data Source",
    dataSourceText:
      "Aviation crash data from CSV file based on Kaggle dataset, processed and filtered for interactive visualization purposes.",

   
    designer: "Designer Information",
    name: "Name",
    studentId: "Student ID",
    portfolio: "Portfolio",
    githubRepo: "GitHub Repository",
    linkto: "Link to Demo",

    dashboardGoalData: "Dashboard Goal & Data",
    domain: "Domain",
    domainDescription:
      "Interactive aviation safety analysis with both single and comparative modes, focusing on crash data visualization to identify patterns, trends, and safety insights through advanced filtering and comparison capabilities.",
    dataset: "Dataset",
    datasetDescription:
      "The dataset contains aviation crash records with fields including date, aircraft type, registration, operator, fatalities, location, and damage severity. Data is provided in CSV format with user-friendly damage type labels and interactive filtering capabilities.",
    source: "Source",
    dataUsage: "Data Usage",
    dataUsageDescription:
      "The data supports both single analysis and comparative analysis modes, with interactive temporal trends (line chart) and categorical comparisons (bar chart), featuring drag-to-zoom, hide/show functionality, and real-time filtering.",

    designReflection: "Design Reflection",
    chartsSection: "Charts Selection",
    lineChart: "Interactive Line Chart (Temporal Analysis)",
    lineChartReason:
      "Enhanced with brush zoom, hide/show legend functionality, and support for both single and comparative analysis modes, allowing users to identify patterns and trends with advanced interactivity.",
    barChart: "Interactive Horizontal Bar Chart (Categorical Analysis)",
    barChartReason:
      "Completely rewritten with proper data rendering, interactive legend with hide/show functionality, and support for both single and comparative modes with enhanced tooltips and visual feedback.",
    pieChart: "Interactive Pie Chart (Severity Distribution)",
    pieChartReason:
      "Provides a clear visualization of damage severity distribution using an interactive pie layout, with hoverable segments, legends, and support for both focused and comparative breakdowns.",


    threeCsSection: "3Cs Implementation",
    context: "Context",
    contextDescription:
      "Clear mode indicators, step-by-step filtering process, and comprehensive tooltips provide context. Interactive legends and brush zoom give users control over data exploration.",
    clutterFree: "Clutter-Free",
    clutterFreeDescription:
      "Clean interface with optional comparison mode, hide/show functionality to reduce visual clutter, and focused data presentation with user-controlled visibility.",
    contrast: "Contrast",
    contrastDescription:
      "Consistent blue/red color scheme for comparisons, high contrast interactive elements, and clear visual distinction between different data series and modes.",

    layoutInteractions: "Layout & Interactions",
    layoutInteractionsDescription:
      "Dual-mode system (single/comparison) with advanced interactivity: drag-to-zoom brush, hide/show legend items, mode toggle, and prevention of duplicate selections in comparison mode.",

    internationalization: "Internationalization",
    languages: "Languages",
    languagesDescription:
      "Complete English and Russian support with user-friendly damage type labels, localized number formatting, and all interactive elements properly translated.",
    translations: "Translation Method",
    translationsDescription:
      "Translations obtained using Google Translate with context-specific refinements for technical aviation terms.",
    challenges: "Translation Challenges",
    challengesDescription:
      "Aviation terminology required careful translation, damage type labels needed user-friendly versions, and interactive element labels required consistent translation across modes.",
    localizedElements: "Localized Elements",
    localizedElementsDescription:
      "All text, chart labels, tooltips, mode indicators, damage type labels, filter options, and interactive elements are fully localized with proper number formatting.",

    visualDesign: "Visual Design Decisions",
    visualDesignDescription:
      "Enhanced visual hierarchy with mode indicators, consistent interactive color schemes, improved language selector with flags, and advanced chart interactivity with proper visual feedback for all user actions.",

    codeImplementation: "Code & Implementation",
    codeImplementationDescription:
      "Built with React, TypeScript, Tailwind CSS, and Recharts with advanced features: dual-mode analysis, interactive brush zoom, hide/show legend functionality, duplicate selection prevention, and comprehensive CSV data processing with user-friendly label mapping.",

    aiAcknowledgment: "Generative AI Acknowledgment",
    aiAcknowledgmentDescription:
      "Used ChatGPT for advanced code debugging, chart enhancement patterns, and text content in this report and throughout the app.",
  },
  ru: {
   
    dashboardTitle: "Панель Безопасности Авиации",
    designInfo: "Информация о Дизайне",
    backToDashboard: "Вернуться к Панели",
    loading: "Загрузка данных...",

   
    analysisMode: "Режим Анализа",
    comparisonMode: "Режим Сравнения",
    singleMode: "Режим Одиночного Анализа",

   
    step1ChooseType: "Шаг 1: Выберите Тип Анализа",
    step2ChooseValues: "Шаг 2: Выберите Значения для Сравнения",
    selectFilter: "Выберите Значение Фильтра",
    comparison: "Сравнение",
    showAll: "Показать Все Данные",
    allData: "Все Данные",

   
    timeRange: "Временной Диапазон",
    operator: "Оператор",
    damageType: "Тип Повреждения",
    aircraftType: "Тип Самолета",

   
    substantialDamage: "Существенные Повреждения",
    totalLoss: "Списание (Полная Потеря)",
    minorDamage: "Без Повреждений / Незначительные",

   
    totalCrashes: "Всего Катастроф",
    totalFatalities: "Всего Жертв",
    avgFatalities: "Среднее Жертв на Катастрофу",
    fatalCrashes: "Смертельные Катастрофы",
    year: "Год",

   
    crashes: "Катастрофы",
    percentage: "Процент",
    showItem: "Показать",
    fatalities: "Жертвы",
    crashesByYear: "Авиационные Катастрофы и Жертвы во Времени",
    topAircraftTypes: "Типы Самолетов по Частоте Катастроф",
    lineChartDescription:
      "Интерактивная временная шкала, показывающая авиационные катастрофы и жертвы. Используйте кисть внизу для увеличения определенных временных диапазонов и нажимайте элементы легенды для скрытия/показа серий данных.",
    barChartDescription:
      "Интерактивное сравнение типов самолетов по частоте катастроф. Нажимайте элементы легенды для скрытия/показа различных серий данных и наводите курсор для подробной информации.", damageSeverityDistribution: "Распределение по степени повреждений",
    pieChartDescription: "Интерактивная круговая диаграмма, показывающая распределение по степени тяжести аварий. Наведите курсор на сегменты для подробной информации в процентах.",


   
    dataSource: "Источник Данных",
    dataSourceText:
      "Данные об авиационных катастрофах из CSV файла на основе набора данных Kaggle, обработанные и отфильтрованные для целей интерактивной визуализации.",

    designer: "Информация о Дизайнере",
    name: "Имя",
    studentId: "ID Студента",
    portfolio: "Портфолио",
    githubRepo: "GitHub Репозиторий",
    linkto: "Ссылка на демо",

    dashboardGoalData: "Цель Панели и Данные",
    domain: "Область",
    domainDescription:
      "Интерактивный анализ безопасности авиации с одиночным и сравнительным режимами, фокусирующийся на визуализации данных о катастрофах для выявления закономерностей, тенденций и информации о безопасности через продвинутые возможности фильтрации и сравнения.",
    dataset: "Набор Данных",
    datasetDescription:
      "Набор данных содержит записи об авиационных катастрофах с полями, включающими дату, тип самолета, регистрацию, оператора, жертвы, местоположение и серьезность повреждений. Данные предоставлены в формате CSV с удобными для пользователя метками типов повреждений и интерактивными возможностями фильтрации.",
    source: "Источник",
    dataUsage: "Использование Данных",
    dataUsageDescription:
      "Данные поддерживают как одиночный анализ, так и режимы сравнительного анализа, с интерактивными временными тенденциями (линейный график) и категориальными сравнениями (столбчатая диаграмма), включающими перетаскивание для увеличения, функциональность скрытия/показа и фильтрацию в реальном времени.",

    designReflection: "Размышления о Дизайне",
    chartsSection: "Выбор Графиков",
    lineChart: "Интерактивный Линейный График (Временной Анализ)",
    lineChartReason:
      "Улучшен с увеличением кисти, функциональностью скрытия/показа легенды и поддержкой как одиночного, так и сравнительного режимов анализа, позволяя пользователям выявлять закономерности и тенденции с продвинутой интерактивностью.",
    barChart: "Интерактивная Горизонтальная Столбчатая Диаграмма (Категориальный Анализ)",
    barChartReason:
      "Полностью переписана с правильным отображением данных, интерактивной легендой с функциональностью скрытия/показа и поддержкой как одиночного, так и сравнительного режимов с улучшенными подсказками и визуальной обратной связью.",
    pieChart: "Интерактивная круговая диаграмма (Распределение по тяжести)",
    pieChartReason:
      "Предоставляет наглядное отображение распределения по степени тяжести повреждений с помощью интерактивной круговой диаграммы: сегменты с наведением, легенда и поддержка как фокусного, так и сравнительного анализа.",


    threeCsSection: "Реализация 3К",
    context: "Контекст",
    contextDescription:
      "Четкие индикаторы режима, пошаговый процесс фильтрации и всеобъемлющие подсказки обеспечивают контекст. Интерактивные легенды и увеличение кисти дают пользователям контроль над исследованием данных.",
    clutterFree: "Без Беспорядка",
    clutterFreeDescription:
      "Чистый интерфейс с опциональным режимом сравнения, функциональность скрытия/показа для уменьшения визуального беспорядка и сфокусированное представление данных с контролируемой пользователем видимостью.",
    contrast: "Контраст",
    contrastDescription:
      "Последовательная цветовая схема синий/красный для сравнений, высококонтрастные интерактивные элементы и четкое визуальное различие между различными сериями данных и режимами.",

    layoutInteractions: "Макет и Взаимодействия",
    layoutInteractionsDescription:
      "Двухрежимная система (одиночный/сравнение) с продвинутой интерактивностью: кисть перетаскивания для увеличения, элементы легенды скрытия/показа, переключение режима и предотвращение дублирующих выборов в режиме сравнения.",

    internationalization: "Интернационализация",
    languages: "Языки",
    languagesDescription:
      "Полная поддержка английского и русского языков с удобными для пользователя метками типов повреждений, локализованным форматированием чисел и всеми правильно переведенными интерактивными элементами.",
    translations: "Метод Перевода",
    translationsDescription:
      "Переводы получены с использованием Google Translate с контекстно-специфическими уточнениями для технических авиационных терминов.",
    challenges: "Вызовы Перевода",
    challengesDescription:
      "Авиационная терминология требовала тщательного перевода, метки типов повреждений нуждались в удобных для пользователя версиях, а метки интерактивных элементов требовали последовательного перевода между режимами.",
    localizedElements: "Локализованные Элементы",
    localizedElementsDescription:
      "Весь текст, метки графиков, подсказки, индикаторы режима, метки типов повреждений, опции фильтров и интерактивные элементы полностью локализованы с правильным форматированием чисел.",

    visualDesign: "Решения Визуального Дизайна",
    visualDesignDescription:
      "Улучшенная визуальная иерархия с индикаторами режима, последовательные интерактивные цветовые схемы, улучшенный селектор языка с флагами и продвинутая интерактивность графиков с правильной визуальной обратной связью для всех действий пользователя.",

    codeImplementation: "Код и Реализация",
    codeImplementationDescription:
      "Построено с React, TypeScript, Tailwind CSS и Recharts с продвинутыми функциями: двухрежимный анализ, интерактивное увеличение кисти, функциональность скрытия/показа легенды, предотвращение дублирующих выборов и всеобъемлющая обработка CSV данных с отображением удобных для пользователя меток.",

    aiAcknowledgment: "Признание Генеративного ИИ",
    aiAcknowledgmentDescription:
      "Использован Claude AI (Anthropic) для реализации продвинутых интерактивных функций, логики двухрежимного анализа, паттернов улучшения графиков и решений сложного управления состоянием. Весь код был тщательно протестирован и усовершенствован для оптимального пользовательского опыта.",
  },
}
