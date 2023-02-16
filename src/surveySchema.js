const surveySchema = {
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question1",
        "title": "q1",
        "choices": [
         {
          "value": "Item 1",
          "text": "Yes"
         },
         {
          "value": "Item 2",
          "text": "No"
         }
        ]
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question2",
        "title": "q2",
        "choices": [
         {
          "value": "Item 1",
          "text": "Yes"
         },
         {
          "value": "Item 2",
          "text": "No"
         }
        ]
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question3",
        "title": "q3",
        "choices": [
         {
          "value": "Item 1",
          "text": "Yes"
         },
         {
          "value": "Item 2",
          "text": "No"
         }
        ]
       }
      ]
     }
    ],
    "triggers": [
     {
      "type": "skip",
      "expression": "{question1} = 'Item 1'",
      "gotoName": "question3"
     },
     {
      "type": "skip",
      "expression": "{question1} = 'Item 2'",
      "gotoName": "question2"
     }
    ]
  };
  
  export default surveySchema;
  