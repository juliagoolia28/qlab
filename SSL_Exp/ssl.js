  var par_id = {
    type: 'survey-text',
    questions: ['Enter your participant ID'],
    timing_post_trial: 1000
    };

   String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
        return typeof args[i] != 'undefined' ? args[i++] : '';
    });
    };
	var cond_assign = jsPsych.randomization.sample(['lang1','lang2'],1)[0];
	var datetime = jsPsych.startTime();
	var rand_targ = ['bi','pu','du','da'];
	var rand_targ2 = ['ku','tu','pi','do'];
		
	var pick_targ = function(targType) {
                    return targType[Math.floor(Math.random()*targType.length)];}
					
	if (cond_assign === 'lang1') {
		var target = pick_targ(rand_targ);
	} else if (cond_assign === 'lang2') {
		var target = pick_targ(rand_targ2);}
	
	/* define instructions block */
	  var instr1 = {
    type: 'single-audio',
    stimulus: 'sounds/ssl_instr1.wav',
    prompt: "<p><center>Press the spacebar to begin.</center></p>",
    choices: ['space'],
    timing_response: -1,
    response_ends_trial: true
  };
	
	var instr2 = {
    type: 'single-audio',
    stimulus: 'sound/ssl_instr2.wav',
      prompt: "<p><center>Hi! We're going to listen to an alien language today.</center></p>",
    choices: ['space'],
    timing_response: -1,
    response_ends_trial: true
};

	var instr3 = {
		type: 'single-audio',
		stimulus: 'sound/ssl_instr3.wav',
		  prompt: "<p><center>This is Meeple</center></p> <img src='image/Alien11.png' style='position:fixed;top:20%;left:42%;'>",
		choices: ['space'],
		timing_response: -1,
		response_ends_trial: true
	};

	var instr4 = {
		type: 'single-audio',
		stimulus: 'sound/ssl_instr4.wav',
		  prompt: "<p>Meeple is from Planet B. We're going to listen to Meeple speak her alien language.</p><img src='image/Alien11.png' style='position:fixed;top:20%;left:42%;'>",
		choices: ['space'],
		timing_response: -1,
		response_ends_trial: true
	};

	var instr5 = {
		type: 'single-audio',
		stimulus: 'sound/ssl_instr5.wav',
		  prompt: "<p>Meeple is going to say her favorite word for you now. Listen carefully!<p><img src='image/Alien11.png' style='position:fixed;top:20%;left:42%;'>",
		choices: ['space'],
		timing_response: -1,
		response_ends_trial: true
	};
		

    var instr6_targ = {
	  type: 'single-audio',
	  stimulus: 'sound/{}.wav'.format(target),
	  choices: ['space'],
	  timing_response: -1,
	  response_ends_trial: true
	};
     
	var instr6 = {
		type: 'single-audio',
		stimulus: 'sound/ssl_instr6.wav',
		  prompt: "<p>When you hear Meeple say her favorite word, press the space bar as soon as you can. Let's practice!</p><img src='image/Alien11.png' style='position:fixed;top:20%;left:42%;'>",
		choices: ['space'],
		timing_response: -1,
		response_ends_trial: true
	}; 

	var instr7 = {
		type: 'single-audio',
		stimulus: 'sound/ssl_instr7.wav',
		  prompt: "<p>Good job! Meeple is going to say many words in her alien language. Remember to press the spacebar whenever you hear Meeple's favorite word!</p><img src='image/Alien11.png' style='position:fixed;top:29%;left:42%;'>",
		choices: ['space'],
		timing_response: -1,
		response_ends_trial: true
	};
	
	//reading the sound file
   	
    	function textFileToArray(filename)
	{
   	 var reader = (window.XMLHttpRequest != null ) 
               ? new XMLHttpRequest() 
               : new ActiveXObject("Microsoft.XMLHTTP");
    	 reader.open("GET", filename, false );
   	 reader.send( );
   	 return reader.responseText.split('\n'); 
	}
	
	
	//check condition
	if (cond_assign === 'lang1') {
		var sound = textFileToArray('S_fam_seq_1.txt');}
	else if (cond_assign === 'lang2') {
		var sound = textFileToArray('S_fam_seq_2.txt');}
		
		
	//putting the sound file into the experimental block
	var trials = [];
	for (var i = 0; i < ((sound.length)-1); i++) {
		trials.push({stimulus: sound[i]});
	}
	
	var block = {
	  type: 'single-audio',
	  choices: 'space',
	  timeline: trials,
	  timing_response: 460,
	  timing_post_trial: 20
	}

	var instr8 = {
	    type: 'single-audio',
	    stimulus: 'sound/ssl_instr8.wav',
	    prompt: "<p><center>Great, you did it!</center></p>",
	    choices: ['space'],
	    timing_response: -1,
	    response_ends_trial: true
	}
	
	var instr9 = {
	    type: 'single-audio',
	    stimulus: 'sound/ssl_instr9.wav',
	      prompt: "<p><center>Now look at these two aliens</center></p><img src='../tone_images/two_aliens.png' style='position:fixed;top:20%;left:35%;'>",
	    choices: ['space'],
	    timing_response: -1,
	    response_ends_trial: true
	}	    

	var instr10 = {
	    type: 'single-audio',
	    stimulus: 'sound/ssl_instr10.wav',
	    prompt: "<p><center>Each of these aliens will say a short phrase. Please try your best to identify which phrase sounds more like Meeple's language. If you don't know the answer, just give your best guess!\n\nPress the left arrow if the first alien's phrase sounds more like Meeple's language, and press the right arrow if the second alien's phrase sounds more like Meeple's language.</center></p>",
	    choices: ['space'],
	    timing_response: -1,
	    response_ends_trial: true
	    }
	    
	//load all the sound files for task 2    
	var sounds = [];
	sounds['1'] = 'sound/di.wav';
	sounds['2'] = 'sound/ba.wav';
	sounds['3'] = 'sound/pu.wav';
	sounds['4'] = 'sound/pa.wav';
	sounds['5'] = 'sound/bi.wav';
	sounds['6'] = 'sound/do.wav';
	sounds['7'] = 'sound/bu.wav';
	sounds['8'] = 'sound/tu.wav';
	sounds['9'] = 'sound/du.wav';
	sounds['10'] = 'sound/pi.wav';
	sounds['11'] = 'sound/ti.wav';
	sounds['12'] = 'sound/ta.wav';
	sounds['13'] = 'sound/da.wav';
	sounds['14'] = 'sound/go.wav';
	sounds['15'] = 'sound/ku.wav';
	sounds['16'] = 'sound/ro.wav';
	sounds['17'] = 'sound/silence.wav';
	sounds['18'] = 'sound/la.wav';

	//asign order of run depending on condition. [0] signifies a short pause 
	if (cond_assign === 'lang1') {
	var forced_test = [17,1,2,[3,0],1,4,5,17,1,2,[3,0],7,8,9,17,7,8,[9,0],1,2,3,17,7,4,[13,0],12,2,13,17,1,2,[3,0],12,2,13,17,
	1,2,[3,0],10,11,3,17,10,11,[3,0],10,8,5,17,1,4,[5,0],10,8,5,17,7,4,[13,0],10,11,3,17,10,8,[5,0],7,8,9,17,12,11,[9,0],
	10,11,3,17,12,2,[13,0],12,11,9,17,7,8,[9,0],12,11,9,17,10,8,[5,0],12,2,13,17,1,4,[5,0],1,2,3,17,10,8,[5,0],10,11,3,17,
	10,11,[3,0],7,4,13,17,10,11,[3,0],1,2,3,17,12,11,[9,0],7,8,9,17,12,2,[13,0],10,8,5,17,12,11,[9,0],1,4,5,17,10,8,[5,0],1,4,5,17,
	10,11,[3,0],12,11,9,17,1,4,[5,0],7,4,13,17,12,2,[13,0],1,2,3,17,7,8,[9,0],10,8,5,17,12,11,[9,0],12,2,13,17,7,4,[13,0],1,4,5,
	17,1,4,[5,0],12,11,9,17,7,4,[13,0],7,8,9,17,12,2,[13,0],7,4,13,17,7,8,[9,0],7,4,13,17]}
	else if (cond_assign === 'lang2') {
	var forced_test = [17,11,7,[6,0],13,5,8,17,4,5,[15,0],14,7,15,17,11,18,[10,0],11,7,6,17,13,16,[10,0],4,16,6,17,14,18,[8,0],
	13,5,8,17,13,16,[10,0],4,16,6,17,14,7,[15,0],11,7,6,17,11,18,[10,0],4,5,15,17,13,5,[8,0],14,18,8,17,4,16,[6,0],13,16,10,17,
	4,5,[15,0],14,7,15,17,11,7,[6,0],11,18,10,17,4,5,[15,0],14,7,15,17,4,16,[6,0],13,16,10,17,13,5,[8,0],11,7,6,17,14,18,[8,0],11,18,10,17,
	4,16,[6,0],4,5,15,17,14,7,[15,0],13,16,10,17,14,18,[8,0],13,5,8,17,11,7,[6,0],14,7,15,17,4,16,[6,0],14,18,8,17,11,7,[6,0],11,18,10,17,13,
	5,[8,0],13,16,10,17,4,5,[15,0],11,18,10,17,13,5,[8,0],14,18,8,17,11,7,[6,0],14,7,15,17,4,16,[6,0],13,16,10,17,4,5,[15,0],14,7,15,17,13,
	16,[10,0],11,18,10,17,13,5,[8,0],14,18,8,17,11,18,[10,0],11,7,6,17,4,16,[6,0],4,5,15,17]}
	
	var tone_block_2 = [];
	for (ii=0; ii<forced_test.length; ii++) {
	    if (ii !== 0 && forced_test[ii] === 17) {
	        tone_block_2.push({'stimulus': 'sound/silence.wav',
	                          'prompt': "<p><center>Which phrase is like Meeple\'s?\nPress left for first and right for second.</center></p>, <img src='../tone_images/two_aliens.png' style='position:fixed;top:20%;left:35%;'>",
	                          'choices': [37,39],
	                          'timing_response': 1600000000,
	                          'timing_post_trial': 200,
	                          'response_ends_trial': true});
	    } else if (ii === 0) {
	        tone_block_2.push({'stimulus': 'sound/silence.wav',
	                          'prompt': '',
	                          'choices': [37,39],
	                          'timing_response': 200,
	                          'timing_post_trial': 200,
	                          'response_ends_trial': false});
	
	    } else if (forced_test[ii][1] === 0){
	        tone_block_2.push({'stimulus': sounds[forced_test[ii][0]],
	                          'response_ends_trial': false,
	                          'timing_response': 460,
	                          'timing_post_trial': 1000});
	
	    } else {
	        tone_block_2.push({'stimulus': sounds[forced_test[ii]],
				  'response_ends_trial': false,
				  'timing_response': 460,
				  'timing_post_trial': 20});
	
	   }
	}
		
	var send_time = {
	    type: 'call-function',
	    func: function () {var datetime = jsPsych.startTime(); return datetime;}
	};


	var forced_choice_block = {
	    type: 'single-audio',
	    timeline: tone_block_2,
	    timing_response: 360,
	    timing_post_trial: 20,
	    response_ends_trial: false
	}
	
	var end = {
	    type: 'text',
	    text: "Great, you're done with this task. Press space to move to the next task. You should have 4 tasks in total, if this is the 4th time you see this messages, you are all done!",
	    cont_key: ['space'],
	}

    	
  /* create experiment timeline array */
  var timeline = [];
  timeline.push(par_id);
  timeline.push(instr1);
  timeline.push(instr2);
  timeline.push(instr3);
  timeline.push(instr4);
  timeline.push(instr5);
  timeline.push(instr6_targ);
  timeline.push(instr6);
  timeline.push(instr6_targ);
  timeline.push(instr7);
  timeline.push(block);
  timeline.push(instr8);
  timeline.push(instr9);
  timeline.push(instr10);
  timeline.push(forced_choice_block);
  timeline.push(end);
  
	var datajson = jsPsych.data.dataAsCSV();


	
	jsPsych.data.addProperties({
	        cond: cond_assign,
	        targ: '{}'.format(target),
	        ts: datetime
	});
	
	function saveData(filename, filedata){
	   $.ajax({
	      type:'post',
	      cache: false,
	      url: '../expf/deep/local_data_save.php', // this is the path to the above PHP script
	      data: {filename: filename, filedata: filedata}
	   });
	}


  /* start the experiment */
  jsPsych.init({
    timeline: timeline,
    on_finish: function save_data(datajson){
    saveData("{}_ssl.csv".format(jsPsych.data.getTrialsOfType('survey-text')[0].responses.match(/[a-zA-Z0-9]/g).join('').split(/Q0/)[1]), jsPsych.data.dataAsCSV()); 
    var data_table = "ssl_table";
    $.ajax({
        type:'post',
        cache: false,
        url: '../savedata.php',
        data: {
            table: data_table,
            json: JSON.stringify(datajson)
       },
       success: function(output) { console.log(output); }
     });
    
   setTimeout(function() {
    window.location.replace("../LSL_Exp/lsl.html");
    }, 3000);
       }
       }

});
