let items = [
   {
      question: "Modern Americans are more responsible for antebellum slavery than modern Germans are for the Holocaust",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "Psychology suggests that those who have been abused in the past are more likely to abuse others in the future. Does this same principle hold for countries or ethnic groups?",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.5,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Possession of extremely dangerous drugs, such as heroin, should be a legal offence",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left

   },
   {
      question: "The government should have the power to review newspapers before they publish, to ensure that false and harmful information isn’t spread",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false, neutralAlert: false
   },
   {
      question: "The state is a responsible line-drawer for what types of speech and substances are suitable for the public",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.5,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "You can stop and search a suspected violent religious Muslim without warrant, but with reasonable suspicion",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0.5,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "You can stop and search a suspected violent KKK member without warrant, but with reasonable suspicion",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0.5,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "The law should try to emulate morality as closely as possible",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 3,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Prostitution should be legal",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "We should adopt a policy of state atheism, and tax all religious institutions as if they are typical businesses (assuming taxes exist)",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1.5,
      // how much question should affect Left/Right score
      weightLR: 0.5,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "In general, security should be prioritized over freedom",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 3,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Pornography access needs to be severely restricted, since easy access is damaging our youth",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 0.75,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.25,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Pornography should be more regulated by the gov’t to ensure that certain extremely vulgar sex acts are not depicted online",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Gender roles, whether they are important or not in modern society, are a natural truth of humanity",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "'Racism', 'Islamophobia' and all the other things we are told to beat ourselves up over, are literally creations of a multicultural West that should never have happened (source: @wayotworld on twitter)",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 10,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "The KKK and ISIS should both have a right to march peacefully and safely near synagogues and mosques ",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 2.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Provincial heartland culture is innately more American than cosmopolitan city culture",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 3,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "My country should come before my ethnic/religious community",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.5,
      // multiplier for how much negative answer should raise score
      weightNeg: 2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "We have a moral obligation to betray our country if we believe that they are taking an unconscionable action",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 3.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: " American academia has a suspicious degree of foreign sympathies, and might even be anti-patriotic",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "I feel that I have more in common with an American billionaire than with an Iranian of my social class",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "A poor white male in the US is more privileged than a middle class African-American female",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 3,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.50,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "Those without a formal higher education from a respected institution are unfit to serve as the President of the United States",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 0,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Marriage should exist as a legal contract as well as a social one",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Some cultures are more prone to genocide, terrorism, and economic greed than others",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "There is a fine line between honest criticism of a country, and outright contempt for its inhabitants",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Israel receives a significant amount of negative attention mainly because of antisemitism",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 0.25,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 2.69,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "It is traitorous for a member of a specific ethnic or religious minority to rally against the wishes of their own group for the greater national good",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "There are objective moral laws -- some things are strictly moral, others are strictly immoral",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "The reason that some ethnic groups are responsible for more crime is due to discrimination, but the reason that males are responsible for more crime is due to their innate tendencies toward violence",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 3,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.50,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "Most minorities are not racist, but most white Americans are",
   // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 3,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.25,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "Victimless crimes are never truly victimless",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },




   {
      question: "I'd rather be living in today's world than the world 50 years ago",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 0.25,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 6,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "We need to increase taxes on the rich ",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: " We need to have a single payer, government controlled health insurance system",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.50,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.25,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "Financial institutions should not have been bailed out in 2008, and the economy would be better off today if the bailouts never happened",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "How much do you agree with: from each according to his ability, to each according to his need",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 3.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.5,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.25,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "Public colleges should be tuition-free ",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "Housing should be guaranteed as a right  ",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.5,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "The government should guarantee a job to all its citizens",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 5.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.2,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.25,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1.5,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "The economy should come before social liberties -- we should sacrifice some social liberties for the good of the economy",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 4,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.2,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.25,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "People who receive government benefits should be restricted in their actions, namely those related to support of hateful movements",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.50,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 2.5,
      // how much question should affect Left/Right score
      weightLR: 0.5,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "If racial minorities are poorer than whites, an economic redistribution policy should be instituted to bridge this gap",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 3,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.50,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: " If I had to choose, I would rather have a wealthier society than a more equal one",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: " In the event of a pandemic such as COVID-19, the government should have the right to confiscate personal protective equipment from private hospitals and individuals that have extra and redistribute it to areas that have run out of supplies",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 2,
      // multiplier for how much negative answer should raise score
      weightNeg: 2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "The free market would do a better job innovating to solve the climate crisis without government regulations",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 8,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Immigration is, in general, good for the economy",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "GDP is an antiquated measurement because wealth inequality is a more important consideration than economic growth",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "The existence of billionaires is immoral and a sad reflection on our economy and society ",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "Workers, not stockholders, should wield the most decision making power in corporations",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 4,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.25,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "Charity does a much better job than welfare could ",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.50,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Welfare did not improve quality of life for the black household",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 3,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: " I would be in favor of implementing a welfare system that is abused by 500 already-wealthy people, if it brings 10 deserving, poor people out of poverty",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 3,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.50,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "Tariffs are generally a useful tool to protect American workers and farmers",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Communism, if implemented correctly, is compatible with a free and democratic society.",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 3.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.50,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.25,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: " If welfare is inevitable, it would be smart to replace programs like food stamps with straight cash equivalents",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "The Fed has too much control over the US economy for a single organization",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "The coronavirus pandemic is proving that there are too many barriers to emergency drug approval in the US",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "It should be illegal for individuals to sell masks and hand sanitizer at very high prices on internet auction websites even if both the seller and buyer find the transaction mutually beneficial",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 3,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },


   {
      question: " As long as they provide an acceptable reason (such as a national emergency), it is reasonable for the government to have eminent domain rights (the ability to confiscate property from individuals, compensating the individuals at fair market price)",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: " If you are born poor and still die poor in America today, you probably didn’t work hard enough",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 4.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "A Green New Deal that creates jobs to create green public infrastructure is a fundamentally good idea",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "Even the broken window helps the glassman have some wealth",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "A society with no capitalism at all is unsustainable",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 0.25,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.5,
      // multiplier for how much negative answer should raise score
      weightNeg: 4,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Once you own an asset (such as a house or a stock), there should be no further taxation on its transfer to another individual ",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.5,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Goldman Sachs and other big banks have done much more harm to the economy than good",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.5,
      // multiplier for how much negative answer should raise score
      weightNeg: 1.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "We need stronger immigration controls",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "The United States Federal Government ought to pay reparations to African Americans",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 3,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.5,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.25,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "Ideological dogma and core beliefs should come before pragmatism in making political decisions",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 3,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.5,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "I support a baker’s right to deny service to a gay couple on the ground of religious belief ",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "I support a baker's right to not deny service to a black couple on the ground of religious belief",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 3,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.50,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.25,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "We should not intervene in foreign affairs that do not affect us, even in the case of genocide",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },

   {
      question: "I support an employer’s right to not hire someone because they are black",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.5,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.25,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },

   {
      question: "I support an employer’s right to favor hiring black people over white people ",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.5,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "According to The Bell Curve by Richard J. Herrnstein and Charles Murray, Asian Americans have a significantly higher IQ on average than white Americans and black Americans have a significantly lower IQ on average than white Americans. Because they incite racial prejudice, these statistics should NOT be taught in public schools",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   }, 
   {
      question: "Islam today is a peaceful religion",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 0.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   }, 
   {
      question: "Judaism today is a peaceful religion",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 0.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Christianity today is a peaceful religion",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 0.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.5,
      // multiplier for how much negative answer should raise score
      weightNeg: 2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "The existence of private universities has a positive impact on society",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "I would vote for an immoral person who shares my political opinions over a moral person who does not",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "A vote for a candidate that will almost definitely lose (a third party candidate) is a waste of a vote, and unstrategic voting is therefore pointless ",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.5,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "The second amendment guarantees Americans an unrestricted right to own any type of gun",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 4,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.5,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Assuming its existence, the federal government should hold referendums for significant national decisions (such as a declaration of war, BREXIT, legalization of drugs)",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.5,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },

   {
      question: "There is a fine line between a candidate who changes their mind on a few issues, and a candidate who changes their core values opportunistically ",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 0.75,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 0,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "I am proud to call myself an American",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },


   {
      question: "Anyone who thinks that they are “above” politics is a poor citizen",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Any scientist who thinks that politicians have no business offering their opinions on science, has no business offering his or her opinion on policy",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "In the eyes of the American government, an American life should be worth more than 2 foreign lives",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0.5,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },


   {
      question: "Violating international law is sometimes necessary to protect our national interests",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 2.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "If you have nothing to hide, you shouldn’t be worried about the PATRIOT act or stop and frisk searches",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 3.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 2,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Suspected foreign terrorists should have a right to a fair domestic trial instead of being sent to Guantanamo",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Innocent until proven guilty should not only hold in government standard, but also in citizen’s personal views towards a crime suspect",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Convicted felons in the US should have the right to vote",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 2,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.5,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "The United States should have an electoral college, but one that does not over-weight votes in rural states",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 3.5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 0,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "The United States should abolish the electoral college, but still over-weight votes in rural states",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 3,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 0,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "Law enforcement does more harm than good in most minority communities",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 5,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 0.1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "White collar crimes are innately worse than blue collar crimes",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 4,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: false, neutralAlert: false
   },
   {
      question: "The US should be more of a direct democracy than it is now",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 1,
      // multiplier for how much neutral answer should raise score
      weightNeut: 1,
      // multiplier for how much negative answer should raise score
      weightNeg: 1,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 1,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: false,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
   {
      question: "I am willing to collaborate with people of an opposite ideology, even one I deem hateful, on shared political objectives",

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 0,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0.50,
      // multiplier for how much negative answer should raise score
      weightNeg: 2.5,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 1,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: false
   },
/*   {
      question: "Do you like Borg, BABY?",	//commented out because it is retarded

      // for asymmetric weighing (all weights >= 0, default 1 1 1):
      // multiplier for how much affirmative answer should raise score
      weightAff: 0,
      // multiplier for how much neutral answer should raise score
      weightNeut: 0,
      // multiplier for how much negative answer should raise score
      weightNeg: 0,

      // general question weights (0 if it should not affect, >0 if it should)
      // how much question should affect Libertarian/Authoritarian score
      weightLA: 0,
      // how much question should affect Left/Right score
      weightLR: 0,

      // True: Strongly agree is Auth, Strongly disagree is Libertarian
      reverseLA: true,
      // True: Strongly agree is Right, Strongly disagree is Left
      reverseLR: true, neutralAlert: true
   }, */ 


];

let div = document.querySelector("div");
let LA = LR = totalLA = totalLR = 0;
let answers = ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"];

function initialize() {
    for (i = 0; i < items.length; i++) {
        item = items[i];
        let p = document.createElement("p");
        p.for = i;
        p.innerHTML = i+1 + ". " + item.question;
        p.style.fontWeight = "700";
        div.appendChild(p);

        for (let j = 0; j < 5; j++) {
            let button = document.createElement("input");
            button.name = "question" + i;
            button.type = "radio";
            button.val = j;
            let labelAnswer = document.createElement("label");
            labelAnswer.for = button.name;
            labelAnswer.onclick = () => {
                button.checked = true;
            };
            labelAnswer.innerHTML = answers[j];

            let group = document.createElement("div");
            group.appendChild(button);
            group.appendChild(labelAnswer);

            div.appendChild(group);
        }
        div.appendChild(document.createElement("br"));
    }
    let submit = document.createElement("button");
    submit.innerHTML = "Submit answers";
    submit.onclick = processAnswers;
    div.appendChild(submit);
}
function score(answer, item) {
    if (answer > 2)
        return (answer - 2) * item.weightAff;
    else if (answer == 2)
        return (answer - 2) * item.weightNeut;
    else
        return (answer - 2) * item.weightNeg;
}
function processAnswers() {
    let thisAnswer = -1;
    let totalLAWeight = 0, totalLRWeight = 0;
    for (let i = 0; i < items.length; i++) {
        totalLAWeight += items[i].weightLA;
        totalLRWeight += items[i].weightLR;
    }
    for (let i = 0; i < items.length; i++) {
        item = items[i];
        try {
            thisAnswer = (document.querySelector("input[name=question" + i + "]:checked")).val;
        }
        catch {
            let p = document.createElement("p");
            p.innerHTML = "Unfortunately, you are required to answer everything.";
            p.style.color = "red";
            p.style.textEmphasis = "italics";
            p.style.fontWeight = "700";
            div.insertBefore(p, div.childNodes[0]);
            return;
        }

        console.assert(thisAnswer !== -1);

        let deltaMax = 2 * Math.max(item.weightAff, Math.max(item.weightNeut, item.weightNeg));
        let delta = score(thisAnswer, item);
        let deltaLA = delta, deltaLR = delta;
        if (!items[i].reverseLA) {
            deltaLA *= -1;
        }
        if (!items[i].reverseLR) {
            deltaLR *= -1;
        }
        weightLA = items[i].weightLA;
        weightLR = items[i].weightLR;

        LA += deltaLA * weightLA;
        totalLA += deltaMax * weightLA;
        LR += deltaLR * weightLR;
        totalLR += deltaMax * weightLR;

        /* if (thisAnswer==2 && items[i].neutralAlert)
            for (let j=0 ; j<10; j++)
                alert("WHYAAA DONTT YOUAA LIKEAA MEAAA BABYYYAA"); */ //absolutely retarded



    }

    displayAnswers();
}

function drawGraph(fracLA, fracLR) {
    new Chart(document.querySelector("canvas"), {
        type: 'bubble',
        data: {
            labels: "You",
            datasets: [
                {
                    label: ["You"],
                    backgroundColor: "rgba(255,221,50,0.2)",
                    borderColor: "rgba(255,221,50,1)",
                    data: [{
                        x: fracLR,
                        y: fracLA,
                        r: 5
                    }]
                },
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Your political alignment',
                fontSize: 24,
            }, scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Libertarian                                       Authoritarian",
                    },
                    ticks: {
                        min: -1.0,
                        max: +1.0
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Left                                                                       Right",
                        min: -1.0,
                        max: +1.0
                    },
                    ticks: {
                        min: -1.0,
                        max: +1.0
                    }
                }]
            },
            aspectRatio: 1,
            legend: {
                display: false
            }
        }
    });
}

function displayAnswers() {
    let fracLA = LA / totalLA;
    let fracLR = LR / totalLR;
    if (isNaN(fracLA)) {
        fracLA = 0;
    }
    if (isNaN(fracLR)) {
        fracLR = 0;
    }


    //make positive, keep track of it
    //keep track of positive
    let negativeLA = false;
    let negativeLR = false;
    if (fracLA<0) {
       negativeLA= true;
        fracLA= Math.abs(fracLA);
    }

    if (fracLR<0) {
        negativeLR = true;
        fracLR= Math.abs(fracLR);
    }



    //exponents
    if (fracLA>=0.23) {
         fracLA = Math.pow(fracLA, 0.02);
    }

    else if (fracLA>=0.20 && fracLA<0.23) {
       fracLA = Math.pow(fracLA, 0.10);
    }

    else if (fracLA<0.20 && fracLA>=0.15) {
       fracLA = Math.pow(fracLA, 0.14);
    }

    else if (fracLA<0.15 && fracLA>=0.10) {
      fracLA= Math.pow(fracLA, 0.33);
    }
    else if (fracLA<0.10 && fracLA>=0.05)
    {
      fracLA= Math.pow(fracLA, 0.6);
    }
    else
    {
      fracLA= Math.pow(fracLA, 0.8);
    }

    //fracLR

    if (fracLR>=0.23) {
         fracLR = Math.pow(fracLR, 0.02);
    }

    else if (fracLR>=0.20 && fracLR<0.23) {
       fracLR = Math.pow(fracLR, 0.10);
    }

    else if (fracLR<0.20 && fracLR>=0.15) {
       fracLR = Math.pow(fracLR, 0.14);
    }

    else if (fracLR<0.15 && fracLR>=0.10) {
      fracLR= Math.pow(fracLR, 0.33);
    }
    else if (fracLR<0.10 && fracLR>=0.05)
    {
      fracLR= Math.pow(fracLR, 0.6);
    }
    else
    {
      fracLR= Math.pow(fracLR, 0.8);
    }



    //negative corrections

    if (negativeLA) {
      fracLA = -1 * fracLA;
    }
    if (negativeLR) {
      fracLR= -1 * fracLR;
    }





    div.innerHTML = "";
    let button = document.createElement("button");
    button.innerHTML = "Retake the quiz";
    button.onclick = () => {
        div.innerHTML = "";
        document.querySelector("canvas").remove();
        document.querySelector(".chart-container").appendChild(document.createElement("canvas"));
        initialize();
    };
    drawGraph(fracLA, fracLR);
    div.append(button);
    LA = LR = totalLA = totalLR = 0;

}

initialize();
