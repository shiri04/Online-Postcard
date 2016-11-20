

      var answers = [
        "Awesome.",
        "Fun.", 
        "Challenging.", 
        "Confusing.",
        "Difficult.", 
        "The best.",
        "The worst.", 
        "Loud.",
        "Wild."
      ];

      function fortune() {
        num = Math.round( (answers.length - 1) * Math.random());
        return answers[num];
      }

    
