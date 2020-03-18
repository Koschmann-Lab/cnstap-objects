# cnstap-objects
The Knowledge Objects in this repository collection are for the 2020 CNS-TAP web application development project at the University of Michigan Medical School.

The purpose of the 2020 CNS-TAP web application development project is develop a manageable, extensible computable biomedical knowledge system to support research and clinical trials in neuro-oncology.

This project requires a class of KOs that, when their payloads are executed, will enable computation of drug-specific and patient-specific scores for a variety of chemotherapy agents (i.e., drugs or medications). These scores indicate the likely usefulness of various chemotherapy drugs for patients with brain tumors.

From a file-system perspective, all KOs conform to the following hierarchical structure of folders and files:

myfirstKO\
|--metadata.json\
|--service.yaml\
|--deployment.yaml\
|--src\
&nbsp;&nbsp;&nbsp;|--payload_file_1\
&nbsp;&nbsp;&nbsp;.\
&nbsp;&nbsp;&nbsp;.\
&nbsp;&nbsp;&nbsp;.\
&nbsp;&nbsp;&nbsp;|-payload_file_n


Every KO has:
a metadata.json file with descriptive information
a service.yaml file describing an API service in the OpenAPI 3.0 format
a deployment.yaml file specifying the runtime environment(s), the entry point, etc.

Every KO also has one or more payload files. The payload files contain structured data that is machine-processable or software code that is machine-executable, or both. Generally, Payloads, whether in one or multiple files, represent biomedical knowledge that has been established through prior empirical analytical or deliberative procedures.

For the 2020 CNS-TAP web application development project, the main class of KOs (see "collection" folder) has the following file hierarchy:

dasatanib             <-- chemotherapy drug name\
|--metadata.json\
|--service.yaml\
|--deployment.yaml\
|--src\
&nbsp;&nbsp;&nbsp;&nbsp;|--index.js

The payload file of each KO in this class combines structured data and software code represented using the JavaScript programming language.

The structured data in each KO is two-fold. Along with a set of weights (not shown), there is in each KO a drug-specific set of 6 chemotherapy drug facts and 3 patient-specific characteristics represented in a variable object with 9 overall features like this one for dasatanib:

var dasatinib = {\
&nbsp;&nbsp;&nbsp;&nbsp;"tumor_in_vitro":2,    &nbsp;&nbsp;&nbsp;&nbsp; #drug fact\
&nbsp;&nbsp;&nbsp;&nbsp;"tumor_in_vivo":2,     &nbsp;&nbsp;&nbsp;&nbsp; #drug fact\
&nbsp;&nbsp;&nbsp;&nbsp;"phase_one":2,         &nbsp;&nbsp;&nbsp;&nbsp; #drug fact\
&nbsp;&nbsp;&nbsp;&nbsp;"cns_data_response":1, &nbsp;&nbsp;&nbsp;&nbsp; #drug fact\
&nbsp;&nbsp;&nbsp;&nbsp;"brain_penetration":2, &nbsp;&nbsp;&nbsp;&nbsp; #drug fact\
&nbsp;&nbsp;&nbsp;&nbsp;"fda_approve":1,       &nbsp;&nbsp;&nbsp;&nbsp; #drug fact\
&nbsp;&nbsp;&nbsp;&nbsp;"clonality":0,         &nbsp;&nbsp;&nbsp;&nbsp; #patient-specific characteristic\
&nbsp;&nbsp;&nbsp;&nbsp;"varient_tier":0,      &nbsp;&nbsp;&nbsp;&nbsp; #patient-specific characteristic\
&nbsp;&nbsp;&nbsp;&nbsp;"clinical_trial":0     &nbsp;&nbsp;&nbsp;&nbsp; #patient-specific characteristic\
}

The purpose of each drug-specific KO is to have an externalized, encapsulated, well-described, robust, shareable programmatic method for computing a chemotherapy drug and patient-specific utility score based on the drug facts and patient-specific characteristics listed above.

The patient-specific inputs and the outputs from these KOs are detailed in the service.yaml file.


# Intrinsic Drug Table
The KO named "intrinsicDrugTable" is a special KO that outputs a table containing all of the “intrinsic” drug information for all drugs. Example shown below:
...
Dasatinib = {\
&nbsp;&nbsp;&nbsp;&nbsp;"**drug_name**":"Dasatinib",    &nbsp;&nbsp;&nbsp;&nbsp; #drug name\
&nbsp;&nbsp;&nbsp;&nbsp;"**pathway**":"PDGFR",    &nbsp;&nbsp;&nbsp;&nbsp; #drug pathway\  
&nbsp;&nbsp;&nbsp;&nbsp;"tumor_in_vitro":4,   &nbsp;&nbsp;&nbsp;&nbsp; #drug fact\
&nbsp;&nbsp;&nbsp;&nbsp;"tumor_in_vivo":6,    &nbsp;&nbsp;&nbsp;&nbsp; #drug fact\
&nbsp;&nbsp;&nbsp;&nbsp;"phase_one_**safety_data**":6,    &nbsp;&nbsp;&nbsp;&nbsp; #drug fact\
&nbsp;&nbsp;&nbsp;&nbsp;"cns_data_**with_**response":5,   &nbsp;&nbsp;&nbsp;&nbsp; #drug fact\
&nbsp;&nbsp;&nbsp;&nbsp;"brain_penetration":10,   &nbsp;&nbsp;&nbsp;&nbsp; #drug fact\
&nbsp;&nbsp;&nbsp;&nbsp;"fda_approv**al**":10,    &nbsp;&nbsp;&nbsp;&nbsp; #drug fact\
&nbsp;&nbsp;&nbsp;&nbsp;"**total_points**":41,    &nbsp;&nbsp;&nbsp;&nbsp; #total points\
},
Pazopanib_PDGFR = {
   "drug_name":"Pazopanib_PDGFR",
   "pathway":"PDGFR",
   "tumor_in_vitro":4,
   "tumor_in_vivo":6,
   "phase_one_safety_data":6,
   "cns_data_with_response":5,
   "brain_penetration":5,
   "fda_approval":10,
   "total_points":36,
 },
...
