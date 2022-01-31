export const timeToEmitNF = [
    ["", "", { role: "style" }],
    ["SAP recebe", 12, "#6bb1ed"], 
    ["Numeração", 23, "#6bb1ed" ], 
    ["Envio ao SEFAZ", 15,"#6bb1ed"],
    ["NF Emitida", 53, "#6bb1ed" ],
    ["NF recebida no APP", 13, "#6bb1ed"], 
    ];

export const timePerStage= [
    ["contador", "SAP recebe", "Numeração",],
    ["10:00", 12, 26],
    ["10:30", 16, 28],
    ["11:00", 15, 22],
    ["11:30", 19, 30],
    ["12:00", 25, 41],
    ["12:30", 24, 28],
    ["13:00", 23, 34],
    ["13:30", 18, 29],
    ["14:00", 23, 33],
    ["14:30", 16, 25],
    ["15:00", 25, 46],
    ["15:30", 26, 47],
  ];

export const optionsTimePerStage = {
    isStacked: true,
    height: 300,
    legend: { position: "side", maxLines: 5 },
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
    ["contador", "SAP recebe", "Numeração",],
    ["00h", 10, 48,],
    ["01h", 12, 16],
    ["02h", 38, 52],
    ["03h", 25, 28],
    ["04h", 37, 56],
    ["05h", 37, 56],
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