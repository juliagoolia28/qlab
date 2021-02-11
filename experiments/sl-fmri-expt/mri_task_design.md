# BLAST Overview of MRI Task Design and Organization of COPEs
## Last Updated by Julie M. Schneider on 02/11/2021

### Data Description
All derivatives are located on the QLAB server, in the BLAST folder > derivatives > fsl

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

