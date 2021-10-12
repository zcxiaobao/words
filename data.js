const words = [
  "academia",
  "acumen",
  "ambiguity",
  "brink",
  "collaborative",
  "collaborator",
  "contributor",
  "conviction",
  "expertise",
  "foster",
  "headhunter",
  "lone wolf",
  "mindset",
  "mitigate",
  "mobilize",
  "newbie",
  "outshine",
  "perception",
  "prioritize",
  "prospective",
  "studied",
  "scary",
  "teamwork",
  "transition",
];
const chinese = [
  "学术界",
  "敏锐，聪明",
  "不明确",
  "始发点，边缘",
  "协作的",
  "协作者",
  "贡献者，撰稿人",
  "坚定的信仰或主张",
  "专业技能，专业知识",
  "促进，培育",
  "猎头",
  "自行其是的人",
  "思维定式",
  "缓和，减轻",
  "动员，发动",
  "新手",
  "优于",
  "看法，认识",
  "使...优先",
  "有前景的，预期的",
  "经过深思熟虑的",
  "可怕的",
  "合作，协作",
  "过渡，转变",
];
dictChnToEng = {};
dictEngToChn = {};
words.forEach((val, key) => {
  dictEngToChn[val] = chinese[key];
  dictChnToEng[chinese[key]] = val;
});

sentences = [
  {
    sentence:
      "Every company has <strong>___</strong> staff in a given area of <strong>___</strong> that you can <strong>___</strong> to get the job done.",
    strong: ['a handful of', 'expertise', 'count on'],
  },
  {
    sentence:
      "We <strong>___</strong> them <strong>___</strong> the standards we see in our top people. If it looks like they have these same <strong>___</strong>，we will <strong>___</strong> them. It is just a bit riskier.",
    strong: ['hold', 'up to', 'traits', 'place a bet on'],
  },
  {
    sentence:
      "it's an <strong>___</strong> guess,”says my hiring manager client",
    strong: ['educated'],
  },
  {
    sentence:
      "your job as a future employee is to help the hiring manager <strong>___</strong> that risk",
    strong: ['mitigate'],
  },
  {
    sentence:
      "You need to help them <strong>___</strong> you <strong>___</strong> a prospective \"key player\"\.",
    strong: ['indentify', 'as'],
  },
  {
    sentence:
      "Scientists spend their lives <strong>___</strong> and <strong>___</strong>,” he says,but working for a business requires something else entirely — people skills",
    strong: ['accumulating knowledge', 'developing technical acumen'],
  },
  {
    sentence:
      "It <strong>___</strong> repeating because it is the single most public difference between academia and industry. “It is teamwork,”says Fetzer.”The business  environment is less lone-wolf and competitive ,so signs of being collaborative and selfless <strong>___</strong>”.",
    strong: ['deserves', 'stand out'],
  },
  {
    sentence:
      "You can make yourself more attractive to companies by working together with scientists from other laboratories and <strong style="color: red;">disciplines</strong> <strong>___</strong> a common goal - and documenting the results on your resume .",
    strong: ['in pursuit of'],
  },
  {
    sentence:
      "The scientists who is transitioning into the business world must <strong>___</strong> his or her relationship asset <strong>___</strong> their technical assets.",
    strong: ['prioritize', 'above'],
  },
  {
    sentence:
      "To suddenly be valued and <strong>___</strong>  by your mastery of human relationships can be a very scary proposition for a person who has been valued and measured only by his mastery of things.",
    strong: ['measured'],
  },
  {
    sentence:
      "Better still ,develop a reputation inside your lab and with people your lab <strong>___</strong> as a person who fosters and initiates collaborations--and make sure this quality gets mentioned by those who will take those reference phone calls.",
    strong: ['collaborates with'],
  },
  {
    sentence:
      "One way that companies win is by getting \"there\" faster, which means that you not only have to <strong>___</strong> all of the functions that support a business to move quickly, but you have to know how to decide where \" there\" is!",
    strong: ['mobilize'],
  },
  {
    sentence:
      "This creates a requirement not only for people who can act quickly,but for there who can think fast and have the courage to act on their convictions.This requirement needs to run throughout an organization and is not <strong>___</strong> to management",
    strong: ['exclusive'],
  },
  {
    sentence:
      "Business success is often defined by <strong>___</strong> ambiguity and risk——–personal,organizational,and financial.",
    strong: ['comfort with'],
  },
  {
    sentence:
      "This creates a <strong>___</strong> for many scientists because success in academia is more about careful,studied research.",
    strong: ['disconnect'],
  },
  {
    sentence:
      "Further,great science <strong>___</strong> how one gets to the answer as much as by the answer itself,so scientists often fall in love with the process.",
    strong: ['is often defined by'],
  },
  {
    sentence:
      "In a business, you need to understand the process, but you end up <strong>___</strong> the answer and then take a risk <strong>___</strong> what you think that answer means to your business.",
    strong: ['falling in love with', 'based on'],
  },
  {
    sentence: "A candidate needs to have demonstrated the ability to make decision with <strong>___</strong> or <strong>___</strong>.",
      strong: ['imperfect', 'incomplete']
  }
];
