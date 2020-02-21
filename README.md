# cnstap-objects
The Knowledge Objects in this repository collection are for the 2020 CNS-TAP web application development project at the University of Michigan Medical School.

The purpose of the 2020 CNS-TAP web application development project is develop a manageable, extensible computable biomedical knowledge system to support research and clinical trials in neuro-oncology.

This project requires a class of KOs that, when their payloads are executed, will enable computation of drug-specific and patient-specific scores for a variety of chemotherapy agents (i.e., drugs or medications). These scores indicate the likely usefulness of various chemotherapy drugs for patients with brain tumors.

From a file-system perspective, all KOs conform to the following hierarchical structure of folders and files:

myfirstKO
|--metadata.json
|--service.yaml
|--src
   |--payload_file_1
   .
   .
   .
   |-payload_file_n

Every KO has a metadata.json file with descriptive information and a service.yaml file describing an API service in the OpenAPI 3.0 format.

Every KO also has one or more payload files. The payload files contain structured data that is machine-processable or software code that is machine-executable, or both. Generally, Payloads, whether in one or multiple files, represent biomedical knowledge that has been established through prior empirical analytical or deliberative procedures.

For the 2020 CNS-TAP web application development project, the main class of KOs has the following file hierarchy:

dasatanib             <-- chemotherapy drug name
|--metadata.json
|--service.yaml
|--src
   |--index.js

The payload file of each KO in this class combines structured data and software code.

The structured data in each KO is two-fold. Along with a set of weights (not shown), there is in each KO a drug-specific set of 6 chemotherapy drug facts and 3 patient-specific characteristics represented in a variable object with 9 overall features like this one for dasatanib:

var dasatinib = {
    "tumor_in_vitro":2,     #drug fact
    "tumor_in_vivo":2,      #drug fact
    "phase_one":2,          #drug fact
    "cns_data_response":1,  #drug fact
    "brain_penetration":2,  #drug fact
    "fda_approve":1,        #drug fact
    "clonality":0,          #patient-specific characteristic
    "varient_tier":0,       #patient-specific characteristic
    "clinical_trial":0      #patient-specific characteristic
}
