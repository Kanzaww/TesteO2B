export const timeToEmitNF = [
    ["", "", { role: "style" }],
    ["SAP recebe", 12, "#6bb1ed"], 
    ["Numeração", 23, "#6bb1ed" ], 
    ["Envio ao SEFAZ", 15,"#6bb1ed"],
    ["NF Emitida", 53, "#6bb1ed" ],
    ["NF recebida no APP", 13, "#6bb1ed"], 
    ];

export const timePerStage= [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];

export const optionsTimePerStage = {
    isStacked: true,
    height: 300,
    legend: { position: "top", maxLines: 3 },
    vAxis: { minValue: 0 },
};

export const amountNFpending = [
    ["", "", { role: "style" }],
    ["1/12", 1, "#ffe02a"], 
    ["02/12", 0, "#ffe02a" ], 
    ["03/12", 0,"#ffe02a"],
    ["04/12", 1, "#ffe02a" ],
    ["05/12", 3, "#ffe02a"], 
    ["06/12", 2, "#ffe02a"], 
    ["07/12", 7, "#ffe02a"], 
    ];


export const averageTimePerHour = [
    ["", "", ""],
    ["New York City, NY", 8175000, 8008000],
    ["Los Angeles, CA", 3792000, 3694000],
    ["Chicago, IL", 2695000, 2896000],
    ["Houston, TX", 2099000, 1953000],
    ["Philadelphia, PA", 1526000, 1517000],
    ];
      
export const optionsAverageTimePerHour = {
        chartArea: { width: "50%" },
        isStacked: true,
        hAxis: {
          title: "",
          minValue: 0,
        },
        vAxis: {
          title: "",
        },
      };

export const topUnity = [
     ["", "", { role: "style" }],
     ["Shangai", 124.2, "#6bb1ed"], 
        ["Beijing", 120.8, "#6bb1ed" ], 
      ["Karachi", 114.9,"#6bb1ed"],
        ["Shenzhen", 103.7, "#6bb1ed" ],
        ["Guangzhou", 98.1, "#6bb1ed"], 
        ["Instabul", 96.7, "#6bb1ed"], 
        ["Mumbai", 91.4, "#6bb1ed"],
        ["Moscow", 88.2, "#6bb1ed"], 
        ["São Paulo", 81.0, "#6bb1ed"],  
        ["Delhi", 73.7, "#6bb1ed"], 
];

export const amountErrors = [
        ["", "", { role: "style" }],
        ["1/12", 10, "#df0026"], 
        ["02/12", 2, "#df0026" ], 
        ["03/12", 6,"#df0026"],
        ["04/12", 5, "#df0026" ],
        ["05/12", 8, "#df0026"], 
        ["06/12", 1, "#df0026"], 
        ["07/12", 3, "#df0026"], 
];