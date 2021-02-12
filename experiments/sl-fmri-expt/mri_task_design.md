# BLAST Overview of MRI Task Design and Organization of COPEs
## Last Updated by Julie M. Schneider on 02/11/2021

### Data Description
There are many iterations of the data:
- featquery: location of outputs from cluster/ROI specific analyses
- firstlevelanalysis: individual level analysis (normalized is irrelevent, and nosmoothing means no smoothing kernel was applied) 
- GCSS_analysis: group-constrained subject-specific analyses
- grouplevelanalysis: group average data
- higherlevelanalysis: individual level analysis, averaging over runs (nosmoothing means no smoothing kernel was applied)

For the purposes of this overview we will focus on the three most important folders:
1. firstlevelanalysis
2. higherlevelanalysis
3. grouplevelanalysis

### Organization of First Level Analyses
Each subject has their own individual folder. Within each subject folder are .feat folders that corresponds to the TASK and RUN. For example, if a participant completes all 4 runs of the auditory SL task, all 4 runs of the visual SL task, AND the language localizer task their folder has the following:

4 runs of ASL data:
- ASL1.feat
- ASL2.feat
- ASL3.feat
- ASL4.feat

4 runs of VSL data:
- VSL1.feat
- VSL2.feat
- VSL3.feat
- VSL4.feat

2 runs of language localizer data:
- sub-blastID_task-langloc_run-01_space-MNI152NLin2009cAsym_desc-preproc_bold_langloc.feat
- sub-blastID_task-langloc_run-02_space-MNI152NLin2009cAsym_desc-preproc_bold_langloc.feat

Focusing only on the SL data, within each .feat is a stats folder containing 4 copes. If the parent folder contains a 1 or 2 (meaning run 1 or 2) then the copes correspond to these contrasts:
|               	| ASL Task                    	|                   	|                       	| VSL Task                   	|                   	|                       	|
|---------------	|-----------------------------	|-------------------	|-----------------------	|----------------------------	|-------------------	|-----------------------	|
|     Cope      	|     Name                    	|     TSL Random    	|     SSL Structured    	|     Name                   	|     LSL Random    	|     VSL Structured    	|
|     Cope 1    	|     Tone Rand > Rest        	|          1        	|            0          	|     Letter Rand > Rest     	|          1        	|            0          	|
|     Cope 2    	|     Speech Struct > Rest    	|          0        	|            1          	|     Image Struct > Rest    	|          0        	|            1          	|
|     Cope 3    	|     Speech>Tone             	|         -1        	|            1          	|     Image> Letter          	|         -1        	|            1          	|
|     Cope 4    	|     Mean                    	|          1        	|            1          	|     Mean                   	|          1        	|            1          	|

If the parent folder contains a 3 or 4 (meaning run 3 or 4) then the copes correspond to these contrasts:

|               	| ASL Task                 	|                       	|                   	| VSL Task                   	|                       	|                   	|
|---------------	|--------------------------	|-----------------------	|-------------------	|----------------------------	|-----------------------	|-------------------	|
|     Cope      	|     Contrast Name        	|     TSL Structured    	|     SSL Random    	|     Name                   	|     LSL Structured    	|     VSL Random    	|
|     Cope 1    	|     Tone Struct> Rest    	|            1          	|          0        	|     Letter Struct> Rest    	|            1          	|          0        	|
|     Cope 2    	|     Speech Rand> Rest    	|            0          	|          1        	|     Image Rand> Rest       	|            0          	|          1        	|
|     Cope 3    	|     Speech>Tone          	|           -1          	|          1        	|     Image>Letter           	|           -1          	|          1        	|
|     Cope 4    	|     Mean                 	|            1          	|          1        	|     Mean                   	|            1          	|          1        	|

### Organization of Higher Level Analyses
We next average across runs that are the same (i.e. 1 & 2/3 & 4), for each task, within an individual. Once again, each subject has their own individual folder. The most important folders are:
1. ASL.gfeat
2. VSL.gfeat
3. langloc.gfeat
* any _norm folders were failed attempts to normalize the data and should ultimately be deleted. *

Within each .gfeat we have 4 cope#.feat folders corresponding to the 4 runs of data. Within each cope#.feat folder are 3 additional copes (within the stats folder). The organization of these contrasts are as follows:

| Parent Folder  = Cope 1 	|     Contrast Name                    	|     Run 1    	|     Run 2    	|     Run 3    	|     Run 4    	|
|-------------------------	|--------------------------------------	|--------------	|--------------	|--------------	|--------------	|
|     Cope 1              	|     Tone Structured > Tone Random    	|       -1     	|       -1     	|       1      	|       1      	|
|     Cope 2              	|     Tone Random > Tone Structured    	|       1      	|       1      	|       -1     	|       -1     	|
|     Cope 3              	|     Tone > Rest                      	|       1      	|       1      	|       1      	|       1      	|

| Parent Folder  = Cope 2 	|     Contrast Name                        	|     Run 1    	|     Run 2    	|     Run 3    	|     Run 4    	|
|-------------------------	|------------------------------------------	|--------------	|--------------	|--------------	|--------------	|
|     Cope 1              	|     Speech Random > Speech Structured    	|       -1     	|       -1     	|       1      	|       1      	|
|     Cope 2              	|     Speech Structured > Speech Random    	|       1      	|       1      	|       -1     	|       -1     	|
|     Cope 3              	|     Speech > Rest                        	|       1      	|       1      	|       1      	|       1      	|

| Parent Folder  = Cope 3 	|     Contrast Name         	|     Run 1    	|     Run 2    	|     Run 3    	|     Run 4    	|
|-------------------------	|---------------------------	|--------------	|--------------	|--------------	|--------------	|
|     Cope 1              	|     Random > Structure    	|       -1     	|       -1     	|       1      	|       1      	|
|     Cope 2              	|     Structure > Random    	|       1      	|       1      	|       -1     	|       -1     	|
|     Cope 3              	|     Speech > Tone         	|       1      	|       1      	|       1      	|       1      	|

| Parent Folder  = Cope 4 	|     Contrast Name                  	|     Run 1    	|     Run 2    	|     Run 3    	|     Run 4    	|
|-------------------------	|------------------------------------	|--------------	|--------------	|--------------	|--------------	|
|     Cope 1              	|     Run 3-4 task > Run 1-2 task    	|       -1     	|       -1     	|       1      	|       1      	|
|     Cope 2              	|     Run 1-2 task > Run 3-4 task    	|       1      	|       1      	|       -1     	|       -1     	|
|     Cope 3              	|     Task > Rest                    	|       1      	|       1      	|       1      	|       1      	|

### Organization of Group Level Analyses
Group level analyses are organized different than previous analyses. While first and higher level analyses should rarely (if ever) change, group level analyses will be re-run based on the research question of interest. Parameters (cluster threshold, use of randomise, inclusion of a covariate, etc.) may vary, but the end result is a group average across a condition(s) of interest. As can be seen in this folder, there are comparisons containing group averages, rather than individual folders.
