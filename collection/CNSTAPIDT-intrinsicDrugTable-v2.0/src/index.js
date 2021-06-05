function intrinsicDrugTable(inputs){
  // inputs = genonmic indicators

// pathway allows the requesting system to indicate a specific tumor target biochemical pathway of interest
  var PW = inputs.pathway;

  var IDT = [
  MK_2206 = {
    "pathways":"AKT",
    "drugagents":"MK2206",
    "vitro":4,
    "vivo":6,
    "safety":6,
    "cns":0,
    "bbb":0,
    "fda":0,
    "subt":16,
    "icln":0,
    "itier":0,
    "itrl":0,
    "cln":0,
    "tier":0,
    "trl":0,
    "total":16,
    "editable":1,
  },
  Perfinosine = {
    "pathways":"AKT",
    "drugagents":"Perfinosine",
    "vitro":2,
    "vivo":0,
    "safety":6,
    "cns":0,
    "bbb":0,
    "fda":0,
    "subt":8,
    "icln":0,
    "itier":0,
    "itrl":0,
    "cln":0,
    "tier":0,
    "trl":0,
    "total":8,
    "editable":0,
  },
  Ceritinib = {
    "pathways":"ALK", "drugagents": "Ceritinib", "vitro": 2, "vivo": 0, "safety": 6, "cns": 0, "bbb": 10, "fda": 10, "subt":28, "icln": 0, "itier":0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 28, "editable": 1,
  },
  Alectinib = {
    "pathways": "ALK", "drugagents": "Alectinib", "vitro": 2, "vivo": 6, "safety": 3, "cns": 5, "bbb": 10, "fda": 0, "subt":26, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 26, "editable": 0,
  },
  Entrectinib = {
    "pathways": "ALK", "drugagents": "Entrectinib", "vitro": 4, "vivo": 0, "safety": 3, "cns": 10, "bbb": 10, "fda": 0, "subt":27, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 27, "editable": 0,
  },
  Dabrafenib = {
    "pathways": "BRAF", "drugagents": "Dabrafenib", "vitro": 4, "vivo": 6, "safety": 6, "cns": 10, "bbb": 5, "fda": 10, "subt":41,  "icln": 0, "itier":0, "itrl":0, "cln": 0, "tier": 0, "trl": 0,"total": 41, "editable": 1,
  },
  Vemurafenib = {
    "pathways": "BRAF", "drugagents": "Vemurafenib", "vitro": 2, "vivo": 0, "safety": 3, "cns": 10, "bbb": 5, "fda": 10, "subt": 30, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 30, "editable": 0,
  },
  Abemaciclib = {
    "pathways": "CDK", "drugagents": "Abemaciclib", "vitro": 4, "vivo": 6, "safety": 3, "cns": 10, "bbb": 5, "fda": 10, "subt": 38, "icln": 0, "itier":0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 38, "editable": 1,
  },
  Palbociclib = {
    "pathways": "CDK", "drugagents": "Palbociclib", "vitro": 4, "vivo": 6, "safety": 6, "cns": 0, "bbb": 5, "fda": 10, "subt": 31, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 31, "editable": 0,
  },
  Ribociclib = {
    "pathways": "CDK", "drugagents": "Ribociclib", "vitro": 2, "vivo": 3, "safety": 6, "cns": 0, "bbb": 10, "fda": 10, "subt": 31, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 31, "editable": 0,
  },
  Prexasertib = {
    "pathways": "Chk1", "drugagents": "Prexasertib", "vitro": 2, "vivo": 6, "safety": 0, "cns": 0, "bbb": 0, "fda": 0, "subt": 8, "icln": 0, "itier":0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 8, "editable": 1,
  },
  Lenalidomide = {
    "pathways": "CNS Generic", "drugagents": "Lenalidomide", "vitro": 2, "vivo": 0, "safety": 6, "cns": 10, "bbb": 10, "fda": 10, "subt": 38, "icln": 0, "itier":0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 38, "editable": 1,
  },
  Olaparib = {
    "pathways": "CNS Generic", "drugagents": "Olaparib", "vitro": 4, "vivo": 6, "safety": 0, "cns": 5, "bbb": 0, "fda": 10, "subt": 25, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 25, "editable": 0,
  },
  Gemcitabine = {
    "pathways": "CNS Generic", "drugagents": "Gemcitabine", "vitro": 4, "vivo": 6, "safety": 0, "cns": 5, "bbb": 10, "fda": 10, "subt": 35, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 35, "editable": 0,
  },
  Erlotinib = {
    "pathways": "EGFR", "drugagents": "Erlotinib", "vitro": 4, "vivo": 0, "safety": 6, "cns": -10, "bbb": 10, "fda": 10, "subt": 20, "icln": 0, "itier":0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 20, "editable": 1,
  },
  Osimertinib = {
    "pathways": "EGFR", "drugagents": "Osimertinib", "vitro": 2, "vivo": 6, "safety": 0, "cns": 5, "bbb": 10, "fda": 10, "subt": 33, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 33, "editable": 0,
  },
  Afatinib = {
    "pathways": "EGFR", "drugagents": "Afatinib", "vitro": 4, "vivo": 6, "safety": 3, "cns": -10, "bbb": 0, "fda": 10, "subt": 13, "icln": 0, "itier":0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 13, "editable": 0,
  },
  Pazopanib_FGFR = {
    "pathways": "FGFR", "drugagents": "Pazopanib (FGFR)", "vitro": 4, "vivo": 6, "safety": 6, "cns": 10, "bbb": 5, "fda": 10, "subt": 41, "icln": 0, "itier":0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 41, "editable": 1,
  },
  Ponatinib_FGFR = {
    "pathways": "FGFR", "drugagents": "Ponatinib (FGFR)", "vitro": 4, "vivo": 6, "safety": 3, "cns": 5, "bbb": 10, "fda": 10, "subt": 38, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 38, "editable": 0,
  },
  Erdafitinib_FGFR = {
    "pathways": "FGFR", "drugagents": "Erdafitinib (FGFR)", "vitro": 4, "vivo": 6, "safety": 0, "cns": 5, "bbb": 0, "fda": 0, "subt": 15, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 15, "editable": 0,
  },
  Debio_1347 = {
    "pathways": "FGFR", "drugagents": "Debio 1347 (FGFR)", "vitro": 2, "vivo": 1, "safety": 0, "cns": 0, "bbb": 0, "fda": 0, "subt": 3, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 3, "editable": 0,
  },
  Infigratinib = {
    "pathways": "FGFR", "drugagents": "Infigratinib (FGFR)", "vitro": 4, "vivo": 3, "safety": 3, "cns": 10, "bbb": 0, "fda": 10, "subt": 30, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 30, "editable": 0,
  },
  Etoposide = {
    "pathways": "GENERIC CYTOTOXIC", "drugagents": "Etoposide", "vitro": 4, "vivo": 6, "safety": 6, "cns": 10, "bbb": 0, "fda": 10, "subt": 36, "icln": 0, "itier":0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 36, "editable": 1,
  },
  Carboplatin = {
    "pathways": "GENERIC CYTOTOXIC", "drugagents": "Carboplatin", "vitro": 4, "vivo": 6, "safety": 6, "cns": 10, "bbb": 0, "fda": 10, "subt": 36, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 36, "editable": 0,
  },
  Irinotecan = {
    "pathways": "GENERIC CYTOTOXIC", "drugagents": "Irinotecan", "vitro": 4, "vivo": 6, "safety": 6, "cns": 10, "bbb": 0, "fda": 10, "subt": 36, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 36, "editable": 0,
  },
  CCNU = {
    "pathways": "GENERIC CYTOTOXIC", "drugagents": "CCNU (lomustine)", "vitro": 4, "vivo": 6, "safety": 6, "cns": 10, "bbb": 0, "fda": 10, "subt": 36, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 36, "editable": 0,
  },
  Temozolomide = {
    "pathways": "GENERIC CYTOTOXIC", "drugagents": "Temozolomide", "vitro": 4, "vivo": 6, "safety": 6, "cns": 10, "bbb": 0, "fda": 10, "subt": 36, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 36, "editable": 0,
  },
  Panobinostat = {
    "pathways": "H3K27M", "drugagents": "Panobinostat", "vitro": 2, "vivo": 6, "safety": 6, "cns": 10, "bbb": 0, "fda": 10, "subt": 34, "icln": 0, "itier":0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 34, "editable": 1,
  },
  Vorinostat = {
    "pathways": "H3K27M", "drugagents": "Vorinostat (SAHA)", "vitro": 2, "vivo": 6, "safety": 6, "cns": -10, "bbb": 10, "fda": 10, "subt": 24, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 24, "editable": 0,
  },
  Entinostat = {
    "pathways": "H3K27M", "drugagents": "Entinostat", "vitro": 4, "vivo": 6, "safety": 3, "cns": 0, "bbb": 5, "fda": 0, "subt": 18, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 18, "editable": 0,
  },
  Valproic_Acid = {
    "pathways": "H3K27M", "drugagents": "Valproic Acid", "vitro": 4, "vivo": 3, "safety": 6, "cns": 0, "bbb": 10, "fda": 10, "subt": 33, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 33, "editable": 0,
  },
  Fimepinostat = {
    "pathways": "H3K27M", "drugagents": "Fimepinostat", "vitro": 4, "vivo": 6, "safety": 3, "cns": 0, "bbb": 0, "fda": 0, "subt": 13, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 13, "editable": 0,
  },
  Onc201 = {
    "pathways": "H3K27M", "drugagents": "Onc201", "vitro": 4, "vivo": 6, "safety": 3, "cns": 10, "bbb": 10, "fda": 0, "subt": 33, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 33, "editable": 0,
  },
  Alisertib = {
    "pathways": "INI1", "drugagents": "Alisertib", "vitro": 4, "vivo": 6, "safety": 6, "cns": 10, "bbb": 10, "fda": 0, "subt": 36, "icln": 0, "itier":0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 36, "editable": 1,
  },
  Tamoxifen = {
    "pathways": "INI1", "drugagents": "Tamoxifen", "vitro": 2, "vivo": 0, "safety": 0, "cns": 0, "bbb": 10, "fda": 10, "subt": 22, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 22, "editable": 0,
  },
  Tazemetostat = {
    "pathways": "INI1", "drugagents": "Tazemetostat (EPZ-6438)", "vitro": 2, "vivo": 0, "safety": 3, "cns": 0, "bbb": 5, "fda": 0, "subt": 10, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 10, "editable": 0,
  },
  Trametinib = {
    "pathways": "MEK", "drugagents": "Trametinib", "vitro": 2, "vivo": 3, "safety": 3, "cns": 5, "bbb": 10, "fda": 10, "subt": 33, "icln": 0, "itier":0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total":33 , "editable": 1,
  },
  Selumetinib = {
    "pathways": "MEK", "drugagents": "Selumetinib", "vitro": 4, "vivo": 3, "safety": 6, "cns": 10, "bbb": 5, "fda": 10, "subt": 38, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 38, "editable": 0,
  },
  Cobimetinib = {
    "pathways": "MEK", "drugagents": "Cobimetinib", "vitro": 4, "vivo": 0, "safety": 0, "cns": 0, "bbb": 5, "fda": 10, "subt": 19, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 19, "editable": 0,
  },
  Binimetinib = {
    "pathways": "MEK", "drugagents": "Binimetinib", "vitro": 4, "vivo": 0, "safety": 0, "cns": 5, "bbb": 0, "fda": 10, "subt": 19, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 19, "editable": 0,
  },
  Crizotinib = {
    "pathways": "MET", "drugagents": "Crizotinib", "vitro": 4, "vivo": 6, "safety": 6, "cns": 5, "bbb": 0, "fda": 10, "subt": 31, "icln": 0, "itier":0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 31, "editable": 1,
  },
  Cabozantinib = {
    "pathways": "MET/VEGF2", "drugagents": "Cabozantinib", "vitro": 4, "vivo": 6, "safety": 6, "cns": 10, "bbb": 10, "fda": 10, "subt": 46, "icln": 0, "itier":0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 46, "editable": 1,
  },
  Crenolanib = {
    "pathways": "PDGFR", "drugagents": "Crenolanib", "vitro": 2, "vivo": 0, "safety": 3, "cns": 0, "bbb": 0, "fda": 0, "subt": 5, "icln": 0, "itier":0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 5, "editable": 1,
  },
  Dasatinib = {
    "pathways": "PDGFR", "drugagents": "Dasatinib", "vitro": 4, "vivo": 6, "safety": 6, "cns": 5, "bbb": 10, "fda": 10, "subt": 41, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 41, "editable": 0,
  },
  Pazopanib_PDGFR = {
    "pathways": "PDGFR", "drugagents": "Pazopanib", "vitro": 4, "vivo": 6, "safety": 6, "cns": 5, "bbb": 5, "fda": 10, "subt": 36, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 36, "editable": 0,
  },
  Ponatinib_PDGFR = {
    "pathways": "PDGFR", "drugagents": "Ponatinib (PDGFR)", "vitro": 4, "vivo": 6, "safety": 0, "cns": 5, "bbb": 10, "fda": 10, "subt": 35, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 35, "editable": 0,
  },
  Sorafenib = {
    "pathways": "PDGFR", "drugagents": "Sorafenib", "vitro": 2, "vivo": 0, "safety": 6, "cns": 0, "bbb": 0, "fda": 10, "subt": 18, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 18, "editable": 0,
  },
  Sunitinib = {
    "pathways": "PDGFR", "drugagents": "Sunitinib", "vitro": 2, "vivo": 6, "safety": 6, "cns": 5, "bbb": 0, "fda": 10, "subt": 29, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 29, "editable": 0,
  },
  Immune_Checkpoint_Inhibitors = {
    "pathways": "PD-1", "drugagents": "Immune Checkpoint Inhibitors", "vitro": 4, "vivo": 6, "safety": 6, "cns": 10, "bbb": 0, "fda": 10, "subt": 36, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 36, "editable": 1,
  },
  BKM120 = {
    "pathways": "PI3K/mTOR", "drugagents": "BKM120 (Buparlisib)", "vitro": 4, "vivo": 6, "safety": 0, "cns": 0, "bbb": 5, "fda": 0, "subt": 15, "icln": 0, "itier":0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 15, "editable": 1,
  },
  Copanlisib = {
    "pathways": "PI3K/mTOR", "drugagents": "Copanlisib", "vitro": 4, "vivo": 3, "safety": 3, "cns": 0, "bbb": 0, "fda": 10, "subt": 20, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 20, "editable": 0,
  },
  Paxalisib = {
    "pathways": "PI3K/mTOR", "drugagents": "Paxalisib (GDC_0084)", "vitro": 4, "vivo": 0, "safety": 0, "cns": 10, "bbb": 10, "fda": 0, "subt": 24, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 24, "editable": 0,
  },
  Everolimus = {
    "pathways": "PI3K/mTOR", "drugagents": "Everolimus (PI3K)", "vitro": 2, "vivo": 0, "safety": 6, "cns": 10, "bbb": 5, "fda": 10, "subt": 33, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 33, "editable": 0,
  },
  Temsirolimus = {
    "pathways": "PI3K/mTOR", "drugagents": "Temsirolimus", "vitro": 4, "vivo": 6, "safety": 6, "cns": -5, "bbb": 5, "fda": 10, "subt": 26, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 26, "editable": 0,
  },
  LY3023414 = {
    "pathways": "PI3K/mTOR", "drugagents": "LY3023414", "vitro": 4, "vivo": 3, "safety": 0, "cns": 5, "bbb": 5, "fda": 0, "subt": 17, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 17, "editable": 0,
  },
  Fimepinostat = {
    "pathways": "PI3K/mTOR", "drugagents": "Fimepinostat", "vitro": 4, "vivo": 6, "safety": 3, "cns": 0, "bbb": 0, "fda": 0, "subt": 13, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 13, "editable": 0,
  },
  Ponatinib = {
    "pathways": "RET", "drugagents": "Ponatinib (RET)", "vitro": 4, "vivo": 6, "safety": 0, "cns": 5, "bbb": 10, "fda": 10, "subt": 35, "icln": 0, "itier":0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 35, "editable": 1,
  },
  Cabozantinib = {
    "pathways": "RET", "drugagents": "Cabozantinib", "vitro": 4, "vivo": 6, "safety": 6, "cns": 10, "bbb": 10, "fda": 10, "subt": 46, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 46, "editable": 0,
  },
  Alectinib = {
    "pathways": "RET", "drugagents": "Alectinib (RET)", "vitro": 2, "vivo": 0, "safety": 0, "cns": 5, "bbb": 10, "fda": 10, "subt": 27, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 27, "editable": 0,
  },
  Loxo_292 = {
    "pathways": "RET", "drugagents": "Loxo-292", "vitro": 2, "vivo": 6, "safety": 3, "cns": 5, "bbb": 10, "fda": 0, "subt": 26, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 26, "editable": 0,
  },
  BLU_667 = {
    "pathways": "RET", "drugagents": "BLU-667", "vitro": 2, "vivo": 3, "safety": 0, "cns": 5, "bbb": 0, "fda": 0, "subt": 10, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 10, "editable": 0,
  },

]
  ;

  var RESPONSE;

  if (PW === "") {
    RESPONSE = IDT;
  } else {
    RESPONSE = IDT.filter(function(object) {
      return object.pathway === PW ;
    })
  }
  return JSON.stringify(RESPONSE);
  // return table of information
}
