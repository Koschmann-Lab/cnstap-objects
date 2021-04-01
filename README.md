# cnstap-objects

Last Updated:   April 1, 2021

KGrid Activator Version Used is:   1.3.6

Runtime Used: "V8"  (JavaScript runtime called V8)

## Instructions for Updating CNS-TAP's Knowledge Objects

The Knowledge Objects in this repository collection are for the CNS-TAP Version 1.0 web application developed at the University of Michigan Medical School.

The purpose of the CNS-TAP web application development project is to develop a manageable, extensible knowledge base to support the use of CNS-TAP in research and clinical trials in neuro-oncology.

This project requires two different Knoweldge Objects (KOs) that, when uploaded into CNS-TAP, enable computation of drug-specific and patient-specific scores for a variety of chemotherapy agents (i.e., drugs or medications). These scores indicate the likely usefulness of various chemotherapy drugs for patients with brain tumors.

### About Knowledge Objects

All KOs have the following hierarchical structure of folders and files:

genericKnowledgeObject\
|--metadata.json\
|--service.yaml\
|--deployment.yaml\
|--src\
|--payload_file_1\
.\
.\
.\
|-payload_file_n

Here is a picture of the file structure:

![alt text](https://github.com/kgrid-objects/cnstap-objects/blob/master/images/Folder%20Structure.png)

Every KO has:
a metadata.json file with descriptive information including the version of the KO
a service.yaml file describing an API or "service" supported by the KO
a deployment.yaml file specifying how to run the code in the KO

Every KO also has one or more payload files. The payload files contain structured data or software code that machines can use. Generally, Payloads, whether in one or multiple files, contain biomedical knowledge that has been established through prior research.

There are only TWO KOs needed to run the CNS-TAP web application. They are described next.

### Intrinsic Drug Table
The KO named "intrinsicDrugTable" is a special KO that outputs a table containing all of the “intrinsic” drug information for all drugs. Example shown below:

<intro here to this KO - what is it?  How is it used in CNS TAP?> 

```
Dasatinib = {\
"**drug_name**":"Dasatinib",    #drug name\
"**pathway**":"PDGFR",     #drug pathway\  
"tumor_in_vitro":4,    #drug fact\
"tumor_in_vivo":6,     #drug fact\
"phase_one_**safety_data**":6,     #drug fact\
"cns_data_**with_**response":5,    #drug fact\
"brain_penetration":10,    #drug fact\
"fda_approv**al**":10,     #drug fact\
"**total_points**":41,     #total points\
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
```

### Tumor Patient Calculator KO 

<add more content here> 
   What is it?
   How is it used in CNS TAP?


# Making Changes to two CNS-TAP Knowledge Objects:

From time to time, it is necessary to update the drug agent related content of the CNS-TAP application. This drug agent related content can be updated WITHOUT having to change the code of the CNS-TAP app. 

To update this content, the following process can be followed. 

The process will require downloading KOs from this GitHub repository, changing the content of those KOs, updating the version(s) of the KOs that are changed, packaging the KOs using special software, pushing the updated KOs back to GitHub, and then, finally, releasing the updated KOs in GitHub.

The process involves editing the content of one or both of the two KOs used by the CNS-TAP app. As described above, the two KOs are called, intrinsicDrugTable and tumorPatientCalculator. 

Here are the steps to follow to download, edit, package, upload, and release these KOs:

DOWNLOADING KOs from GitHub

- From the command line of your local machine, clone repository into your local machine using this command:

  `git clone https://github.com/kgrid-objects/cnstap-objects.git`

- To find one or both the Knowledge Objects needing to be changed, look in the collection folder.


EDITING KOs

- Update the contents of the Knowledge Object in any text editor of your choice, e.g., Atom (www.atom.io)

Next, three examples are given of making changes. The first two examples show changes made to the instrinsicDrugTable Knowledge Object. The final example shows changes made to the tumorPatientCalculator Knowledge Object. These changes are the anticipated types of changes that can be made without necessitating changes to the CNS-TAP app. 

## ADD A NEW DRUG to the CNSTAPIDT-intrinsicDrugTable KO

Before.  Here is an example of what could be the LAST drug entry in the list of drugs in the called "index.js" within the SRC folder of the KO.

```
Sunitinib = {
  "pathways": "PDGFR", "drugagents": "Sunitinib", "vitro": 2, "vivo": 6, "safety": 6, "cns": 5, "bbb": 0, "fda": 10, "subt": 29, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 29, "editable": 0,
}
```

After. A new drug entry for "Immune_Checkpoint_Inhibitors" has been added. Note that a comma (,) has been added after the Sunitinib entry.

```
Sunitinib = {
  "pathways": "PDGFR", "drugagents": "Sunitinib", "vitro": 2, "vivo": 6, "safety": 6, "cns": 5, "bbb": 0, "fda": 10, "subt": 29, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 29, "editable": 0,
},
Immune_Checkpoint_Inhibitors = {
  "pathways": "PD-1", "drugagents": "Immune Checkpoint Inhibitors", "vitro": 4, "vivo": 6, "safety": 6, "cns": 10, "bbb": 0, "fda": 10, "subt": 36, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 36, "editable": 1,
}
```

## CNSTAPIDT-intrinsicDrugTable-v2.0: CHANGE INFORMATION FOR AN EXISTING DRUG

Before:

```
Sunitinib = {
  "pathways": "PDGFR", "drugagents": "Sunitinib", "vitro": 3, "vivo": 6, "safety": 6, "cns": 5, "bbb": 0, "fda": 10, "subt": 30, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 30, "editable": 0,
},

```

After:
```
Sunitinib = {
  "pathways": "PDGFR", "drugagents": "Sunitinib", "vitro": 2, "vivo": 6, "safety": 6, "cns": 5, "bbb": 0, "fda": 10, "subt": 29, "icln": 0, "itier": 0, "itrl":0, "cln": 0, "tier": 0, "trl": 0, "total": 29, "editable": 0,
},
```


## CNSTAPTPC-tumorPatientCalculator-v2.0: CHANGE WEIGHTS

Before:
```
var weights={
  clonalityweight:8,
  tierscoreweight:3,
  trialweight:20,

}
```

After:
```
var weights={
  clonalityweight:5,
  tierscoreweight:3,
  trialweight:20,

}
```

After making changes in the src code for either of the knowledge objects, you will need to take the following steps to ensure that this code is correctly pushed and deployed onto the web. The first step ensures that the version of the code is updated everytime a new change is made:

- Update version number within the @id, identifier, and version sections of the metadata.json file

Here is a picture of the metadata.json file which is where you can update version numbers:

![alt text](https://github.com/kgrid-objects/cnstap-objects/blob/master/images/Versioning.png)

Once you're done updating the versioning numbers, you're all set with regards to making changes to the actual code. Now, make sure to save the file and then open up the command line and follow the following steps:

- Save and then go to the command line (Apple Mac Terminal) in the collection folder

- Run `kgrid package-all`

  Note: Kgrid CLI is needed to run this command. If it is not installed, then run this: `npm i @kgrid/cli -g`


- Then run `kgrid create-manifest`

Now that you have run this command, you will then need to make sure that the changes you made on your local machine are pushed to github so that they can be deployed. Follow the next few steps to do this:

- Push KO file changes to github

- Copy 3 files (manifest.json and the 2 zip files that have the name of each of the 2 objects) into github release section and upload by replacing the existing 3 files with the new 3 files

Here are pictures of the github release section on github and the name of the 3 files that need to be uploaded into the new release:

The github release section can be found on the right side of the repository below the section as depicted below

![alt text](https://github.com/kgrid-objects/cnstap-objects/blob/master/images/Releasepart1.png)

Then click on 'edit release' and replace the 3 files with the 3 new files as depicted below

![alt text](https://github.com/kgrid-objects/cnstap-objects/blob/master/images/Releasepart2.png)

- Finally, click 'update release' at the bottom and you are done. The changes should be reflected in the deployed app shortly
