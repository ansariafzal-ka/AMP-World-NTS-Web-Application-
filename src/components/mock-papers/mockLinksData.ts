export interface SchoolClassLinks {
  [language: string]: string[];
}

export interface MockLinksData {
  school: {
    [classGrade: string]: SchoolClassLinks;
  };
  junior: string[];
  degree: string[];
}

export const MOCK_LINKS_DATA: MockLinksData = {
  school: {
    "8th": {
      English: [
        "https://forms.cloud.microsoft/r/sBpNM5hf9j",
        "https://forms.cloud.microsoft/r/Cj2V9RjMTa",
        "https://forms.cloud.microsoft/r/RvH9YsgG1N",
        "https://forms.cloud.microsoft/r/rkY92fW6FL",
        "https://forms.cloud.microsoft/r/DeTQgY8Syr",
        "https://forms.cloud.microsoft/r/eiiRVs9MFx",
      ],
      Hindi: [
        "https://forms.cloud.microsoft/r/PFCdcsu60q",
        "https://forms.cloud.microsoft/r/AX2LsPwn90",
        "https://forms.cloud.microsoft/r/76wavAUvZU",
        "https://forms.cloud.microsoft/r/w1hkV9cCZU",
      ],
      Urdu: [
        "https://forms.cloud.microsoft/r/5iAKhqYGPc",
        "https://forms.cloud.microsoft/r/UbNaW1mH6K",
        "https://forms.cloud.microsoft/r/rgpuLWR9L4",
        "https://forms.cloud.microsoft/r/eBkcS7eX2K",
      ],
      Gujarati: [
        "https://forms.cloud.microsoft/r/5AiWpQ9Y5e",
        "https://forms.cloud.microsoft/r/Z9v8cz3cTu",
        "https://forms.cloud.microsoft/r/jKBu7nQWpe",
      ],
      Bengali: [
        "https://forms.cloud.microsoft/r/1pScQW7ZuN",
        "https://forms.cloud.microsoft/r/KSTeVfReMi",
      ],
    },
    "9th": {
      English: [
        "https://forms.cloud.microsoft/r/5yiQ4xfbfU",
        "https://forms.cloud.microsoft/r/kvrHC9kWNR",
        "https://forms.cloud.microsoft/r/Pq8fSCNxbg",
        "https://forms.cloud.microsoft/r/XQLVE8Brg3",
        "https://forms.cloud.microsoft/r/qjZ4S9X1W7",
      ],
      Hindi: [
        "https://forms.cloud.microsoft/r/9g5Hnd9b54",
        "https://forms.cloud.microsoft/r/m9yziXqijz",
        "https://forms.cloud.microsoft/r/cUT9HBPDju",
        "https://forms.cloud.microsoft/r/MSREH0UYFR",
      ],
      Urdu: [
        "https://forms.cloud.microsoft/r/uJunmAd4Wf",
        "https://forms.cloud.microsoft/r/3JGL1DDf0m",
        "https://forms.cloud.microsoft/r/Hd7FnAXD5k",
        "https://forms.cloud.microsoft/r/GEYZdvy9bM",
      ],
      Gujarati: [
        "https://forms.cloud.microsoft/r/hsdLqWrC8g",
        "https://forms.cloud.microsoft/r/Rtwd5bMRAV",
        "https://forms.cloud.microsoft/r/m14bnLkA5c",
      ],
      Bengali: [
        "https://forms.cloud.microsoft/r/RTT4KAUe66",
        "https://forms.cloud.microsoft/r/5by86QVFnp",
      ],
    },
    "10th": {
      English: [
        "https://forms.cloud.microsoft/r/EUYPyTGuRs",
        "https://forms.cloud.microsoft/r/zZKenjxcQy",
        "https://forms.cloud.microsoft/r/4T9VqwMrDC",
        "https://forms.cloud.microsoft/r/df0LxpVmms",
        "https://forms.cloud.microsoft/r/7GDreuq0RN",
        "https://forms.cloud.microsoft/r/wfT7DTx5v7",
        "https://forms.cloud.microsoft/r/vKz2DQwxi0",
      ],
      Hindi: [
        "https://forms.cloud.microsoft/r/NFz58VHSam",
        "https://forms.cloud.microsoft/r/siDeBH9yig",
        "https://forms.cloud.microsoft/r/zqu1pk2kt6",
        "https://forms.cloud.microsoft/r/rDRuZDB3tY",
        "https://forms.cloud.microsoft/r/GkGfihxJGC",
        "https://forms.cloud.microsoft/r/pZDG7Ha2hX",
      ],
      Urdu: [
        "https://forms.cloud.microsoft/r/DzYpwjsS5s",
        "https://forms.cloud.microsoft/r/VWDVnhQMvm",
        "https://forms.cloud.microsoft/r/7fXqJNGqLG",
        "https://forms.cloud.microsoft/r/u3xz78jhfZ",
        "https://forms.cloud.microsoft/r/A3gh8s3kQt",
        "https://forms.cloud.microsoft/r/zjcE1SEmTB",
      ],
      Gujarati: [
        "https://forms.cloud.microsoft/r/QCtUyvCVDE",
        "https://forms.cloud.microsoft/r/HWhzHCPH6C",
        "https://forms.cloud.microsoft/r/SdL20G3UY5",
      ],
      Bengali: [
        "https://forms.cloud.microsoft/r/3vSUjZScfU",
        "https://forms.cloud.microsoft/r/BVWHwhxkEj",
      ],
    },
  },
  junior: [
    "https://forms.cloud.microsoft/r/Yi2Zigiy6W",
    "https://forms.cloud.microsoft/r/7wT7u0Qmv0",
    "https://forms.cloud.microsoft/r/ybHsnxSyp6",
    "https://forms.cloud.microsoft/r/76kgtihFfU",
    "https://forms.cloud.microsoft/r/6JUSMQsMC9",
    "https://forms.cloud.microsoft/r/ugmWX0wR77",
    "https://forms.cloud.microsoft/r/KyA9Ki8A4Y",
    "https://forms.cloud.microsoft/r/bhqJL0WBfv",
    "https://forms.cloud.microsoft/r/WhxPASMrFU",
  ],
  degree: [
    "https://forms.cloud.microsoft/r/VzQGjQjU3V",
    "https://forms.cloud.microsoft/r/WbUF2PRU0e",
    "https://forms.cloud.microsoft/r/5uEbqgj8yg",
    "https://forms.cloud.microsoft/r/FLGPEK8UBu",
    "https://forms.cloud.microsoft/r/h3YwfCD6dK",
    "https://forms.cloud.microsoft/r/Z4YeWSyAD4",
    "https://forms.cloud.microsoft/r/nm7ZKTDiRE",
    "https://forms.cloud.microsoft/r/eVhZnAtWkJ",
    "https://forms.cloud.microsoft/r/Jj8nYwjGvT",
  ],
};
