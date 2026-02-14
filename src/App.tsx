import { useState, useMemo } from "react";

const App = () => {
  const links = [
    "https://media1.tenor.com/m/Sa_d9Z8b_XgAAAAC/hi-penguin.gif",
    "https://media1.tenor.com/m/hwTQtfoXjB8AAAAC/wewew-minions.gif",
    "https://media.tenor.com/-fVQ5e6cN2kAAAAi/love-love-fart.gif",
    "https://media1.tenor.com/m/V6PdSXVgMtAAAAAC/finding-dory-do-you.gif",
    "https://media1.tenor.com/m/UGd8phU89aoAAAAC/in-love-love.gif",
    "https://media1.tenor.com/m/mZc49hpb37gAAAAd/vikasskorbinka.gif",
    "https://media1.tenor.com/m/lVOguEvDBzEAAAAC/muddu.gif",
    "https://media1.tenor.com/m/Vgy149Kv-uIAAAAC/fart.gif",
    "https://media1.tenor.com/m/sIRFvzyIFPsAAAAC/simpsons-nervous.gif",
  ];

  const subtitles = [
    "Hi Bebe!",
    "Its me Eshy! 🤓",
    "Hehe 🤭",
    "Did you know, did you know...",
    "You're really prettttttyyyyyy! 😘",
    "Like so beautifulllll! 😍",
    "Okay but I gotta tell you something though...",
    "I farted! 🤪",
    "No but seriously, I've got something to ask...",
  ];

  const slides = useMemo(() => {
    const len = Math.min(links.length, subtitles.length);
    return Array.from({ length: len }, (_, i) => ({
      src: links[i],
      caption: subtitles[i],
    }));
  }, [links, subtitles]);

  const [count, setCount] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const yesButtonSize = noCount * 10 + 16;

  const isShowingSlides = !yesPressed && count < slides.length;
  const isLastSlide = count === slides.length - 1;

  const handleNoClick = () => setNoCount((n) => n + 1);

  const defaultQuestionGif =
    "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif";

  const noGifs = [
    "https://media1.tenor.com/m/R0sWwpU0hwAAAAAC/sad-bear.gif",
    "https://media1.tenor.com/m/6oS4zca0_MAAAAAC/pokemon-pikachu.gif",
    "https://media.tenor.com/grcnnX_KphgAAAAi/holding-back-tears-trying-not-to-cry.gif",
    "https://media1.tenor.com/m/2h-vp_R6NQEAAAAC/sponge-bob-patrick.gif",
    "https://media1.tenor.com/m/w43ByA1RgikAAAAC/milk-and-mocha-cry.gif",
    "https://media.tenor.com/3ugD8oHxJSEAAAAi/broken-hearted-sad.gif",
    "https://media.tenor.com/9NkqWd2xGiAAAAAi/sad.gif",
    "https://media1.tenor.com/m/l4DCBEPW4FoAAAAd/spongebob-spongebob-squarepants.gif",
    "https://media.tenor.com/92aaYBcBrOQAAAAj/bye-im-out.gif",
  ];

  const getNoButtonText = () => {
    const noPhrases = [
      "No",
      "Are you sure?",
      "Pretty please with Boris on top",
      "I'll get you a sweet treat",
      "What about a matcha?",
      "Please bebe",
      "Please please please",
      "Oh mayn oh mayn",
      ":c",
      ":'c",
    ];
    return noPhrases[Math.min(noCount, noPhrases.length - 1)];
  };

  const questionImageSrc =
    noCount === 0 || noGifs.length === 0
      ? defaultQuestionGif
      : noGifs[(noCount - 1) % noGifs.length];

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center text-center px-4">
      {yesPressed ? (
        <>
          <img
            src="https://media1.tenor.com/m/dhUCA1xFqmUAAAAC/baby-scream-yeah.gif"
            className="h-[400px] w-auto object-contain"
          />
          <h1 className="my-4 text-4xl">Hell Yeah!! Mi lob mi Wif!! 🥰</h1>
          <h1 className="my-4 text-4xl">
            Happy Valentines bebe alabiyu so much!! ❤️‍🩹
          </h1>
        </>
      ) : isShowingSlides ? (
        <>
          <img
            className="h-[400px] w-auto object-contain"
            src={slides[count].src}
          />
          <h2 className="my-4 text-4xl">{slides[count].caption}</h2>

          <div className="mt-2 flex items-center justify-center gap-2">
            <button
              onClick={() => setCount((c) => c + 1)}
              className="mr-2 bg-pink-500 font-bold text-white hover:bg-pink-700"
              style={{
                fontSize: yesButtonSize,
                padding: "0.5em 1em",
                borderRadius: yesButtonSize / 3,
              }}
            >
              {isLastSlide ? "Continue" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[400px] w-auto object-contain"
            src={questionImageSrc}
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine? 🥹</h1>

          <div className="flex items-center justify-center gap-3">
            <button
              className="mr-4 bg-green-500 font-bold text-white hover:bg-green-700"
              style={{
                fontSize: yesButtonSize,
                padding: "0.5em 1em",
                borderRadius: yesButtonSize / 3,
              }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>

            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
              style={{
                padding: "0.5em 1em",
                borderRadius: 16 / 3,
              }}
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
