// wasteData.js
const wasteData = {
    Organic: {
      image: 'https://imgs.search.brave.com/9HeE4Xgs_vLqc6NQ5vokJ1N-rNFOQyiONVoqRuLOJ8g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDc5/NDQwOTE1L3Bob3Rv/L2NvbXBvc3Qtd2l0/aC1jb21wb3N0ZWQt/ZWFydGguanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVA1dTJB/Q3RkcFZPWkVUZWJL/dWRPejdSRkwzYjZF/cVktMnVRT3JRMl9i/ZEE9',
      title: "Organic Waste",
      description: "Organic waste includes food scraps, garden trimmings, and other biodegradable materials. Composting is an effective way to dispose of organic waste."
    },
    Food: {
      image: 'https://imgs.search.brave.com/11PnDIEcb-U3lu4F6qCz_q3zBBiXSpMnqHUxx9ykK8g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/MzU0NjM5Mi9waG90/by9sZWZ0b3ZlcnMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUo5QWF0Nl9YM2Z0/UmF2Z1NybTB1OFgy/RmFSY3JzZVczWnVS/YjRUMEdmekE9',
      title: "Food Waste",
      description: "Food waste includes any unused or spoiled food. It can be composted or disposed of in special food waste bins provided by your local waste management service."
    },
    Hazardous: {
      image: 'https://imgs.search.brave.com/0SJbMjjeU4-hamj4oAyNouVAVo6U3XWss35OnT6N5iE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzU5LzE3LzY5/LzM2MF9GXzc1OTE3/NjkzNF9Ua0tndG5x/WmZTelFrUW81UWo2/dmtaRTFrN0RQSEQw/ZS5qcGc',
      title: "Hazardous Waste",
      description: "Hazardous waste includes chemicals, batteries, and other toxic materials. Dispose of these at designated hazardous waste disposal sites."
    },
    Industrial: {
      image: 'https://imgs.search.brave.com/HO7FEOayaHWjinFo5SQSYhdqG2ZDdpsOUvOwRn4W6Dg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgy/MjYyNjc1L3Bob3Rv/L3JhZGlvLWFjdGl2/ZS13YXN0ZS1pLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1C/VGdlOWtYeXZnZ20z/UHUzUVB6bkVYZTRj/UVRtWktQQmN6OHYt/cktPMmlJPQ',
      title: "Industrial Waste",
      description: "Industrial waste includes materials discarded from manufacturing processes. Contact a specialized waste management company for proper disposal."
    },
    Biochemical: {
      image: 'https://imgs.search.brave.com/Z4vTbm7Mbn9wqufhz9cO7iNTcqMdCXFN7rXtcsGWy1c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tZWRpY2FsLXdh/c3RlLW1hbmFnZW1l/bnQtY2x1dHRlcmVk/LWVudmlyb25tZW50/LWdlbmVyYXRpdmUt/YWlfODA0Nzg4LTIw/NjA5OS5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw',
      title: "Biochemical Waste",
      description: "Biochemical waste includes materials that are hazardous to health or the environment. Dispose of these through medical waste services or specialized facilities."
    },
    Solid: {
      image: 'https://imgs.search.brave.com/4KhsIvWUVNIEYAAXBlyX_wnnF-Ip5dHKe8MJ2juBgWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE1/MzUwNTEyMC9waG90/by9yZWN5Y2xpbmct/cGF0dGVybi13YXN0/ZS1yZWNvdmVyeS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/bllKRmdfcGNkSlA3/cWRMOTBvVm05eFYt/U0FvV1ZKTDJQc3NK/UzJwU0p4dz0',
      title: "Solid Waste",
      description: "Solid waste includes everyday items such as packaging, paper, and plastics. Use municipal waste collection services or recycling programs."
    },
    Liquid: {
      image: 'https://imgs.search.brave.com/4UwkfIE0_yl3plSyLGckcDI5WoEVR3snN-ld99IEbpA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNzg0/MDIxODUvcGhvdG8v/bnVjbGVhci1yZXBy/b2Nlc3NpbmctcGxh/bnQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWo5MkxFSkRr/MUdYUFJNNHpNeVJO/NS1NNmpLbDRDOThL/QWM0bGtLRHVmaHc9',
      title: "Liquid Waste",
      description: "Liquid waste includes fluids such as used oil, cleaning agents, and other liquids. Dispose of these through special collection services or hazardous waste facilities."
    },
    Recyclable: {
      image: 'https://imgs.search.brave.com/RxpcW8-n07kiP0iA97E1GqH1xgWE-IxYYXPKXX2_haA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/ZWN5Y2xpbmctYmlu/cy1wYXJrLWNvbnRy/aWJ1dGUtYWlkaW5n/LWVhcnRoXzE1NzAy/Ny0zODgyLmpwZz9z/aXplPTYyNiZleHQ9/anBn',
      title: "Recyclable Waste",
      description: "Recyclable waste includes items like paper, glass, and certain plastics. Separate recyclables from other waste and place them in designated recycling bins."
    },
    Construction: {
      image: 'https://imgs.search.brave.com/WE1d69RptXSzhC_GfkElew4POxZUI-ugwXNDG0R-vl4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/OTEwNjE0MS9waG90/by9zdGVlbC13YXN0/ZS1jb250YWluZXIt/ZmlsbGVkLXdpdGgt/Y29uc3RydWN0aW9u/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1xNUJiVzUzRXJF/UlN0WUJJTEpjQ1VJ/SHdBWXJWX3RmUy05/X1dHRzNOWTNvPQ',
      title: "Construction Waste",
      description: "Construction waste includes debris from building projects, such as wood, metal, and concrete. Arrange for disposal through construction waste services or recycling programs."
    },
    Medical: {
      image: 'https://imgs.search.brave.com/czYRpLXLf1zjde4t3Z09esues8RelHpDty0XkYz_lE4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/OTE1ODk2NS9waG90/by9kaXNjYXJkZWQt/bWVkaWNhbC13YXN0/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9RzAyQjctSk1m/UUlHcEJMM0oyMUhH/VHp4MkVnVGF4WnlP/b0NLeWlnNjNHST0',
      title: "Medical Waste",
      description: "Medical waste includes items such as used needles, bandages, and medications. Dispose of medical waste through certified medical waste disposal services."
    },
    Agricultural: {
      image: 'https://imgs.search.brave.com/Wt9fMQXhNbRheS2g8-FX-7IUPGwL_QPDXSQzMJk5UB8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODI3/NDczNTY4L3Bob3Rv/L3JvdHRlbi1hcHBs/ZXMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWUxNmJLTFJH/VEtZTC11RFVDV01U/d0F1Z1VWOEV2NGtU/SmhJUGVvcjVQeWM9',
      title: "Agricultural Waste",
      description: "Agricultural waste includes crop residues, animal manure, and other materials from farming activities. Compost or manage this waste through farm waste programs."
    },
    Chemical: {
      image: 'https://imgs.search.brave.com/o1ox_2gXlJqg68pl54tDn5WQrplBiwII_LE7JW8RaKU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE1/MzYzODUwMC9waG90/by9jaGVtaWNhbC13/YXN0ZS1kcnVtcy1p/bi1mcm9udC1vZi1o/ZWF2eS1pbmR1c3Ry/eS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Y2I3OGotUVNh/WWxsYU1Lcnhab2l0/NUljTXV2MUdCUjl2/QlhQczlKTVFfOD0',
      title: "Chemical Waste",
      description: "Chemical waste includes hazardous chemicals from industrial or household use. Dispose of chemical waste through specialized disposal services."
    },
    Electronic: {
      image: 'https://imgs.search.brave.com/aESztPnBnASmh1NoJNqofa0_OFwmHkn6pXAwivpAVwE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjY3/ODA5OTM2L3Bob3Rv/L2VsZWN0cm9uaWMt/d2FzdGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUxhWmFM/NmJVMzFaZnlxdHZE/QW41Y0k3ei1MQ1Bl/UnNsWmlvYUVOblIz/ZXc9',
      title: "Electronic Waste",
      description: "Electronic waste includes discarded electronics such as computers and phones. Recycle electronics at designated e-waste recycling centers."
    },
    Textile: {
      image: 'https://imgs.search.brave.com/AnSa0lHkuzl9qd24zJtUDOotHMk4xKd-_pcdZ6D3ov0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTA1/ODU2NjU0L3Bob3Rv/L3RleHRpbGUtd2Fz/dGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUNUMWlubXVw/U3hGY2FmMlpXYS1j/YmZaYl83VmdnUVhZ/TWl6X0VBTjVLY0k9',
      title: "Textile Waste",
      description: "Textile waste includes old clothes, fabric scraps, and other textile materials. Donate usable textiles or recycle them through textile recycling programs."
    },
  };
  
  export default wasteData;
  