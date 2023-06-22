import "./ChatBubble.css";

const ChatBubble = () => {
  return (
    <section
      className="
    text-black
    px-8
    py-4
    text-center
    border-outerBubble
    border-6
    max-w-xs
    text-medium
    bg-bubble
    rounded-3xl
    relative
    before:absolute
    before:left-full
    before:w-0
    before:border-y-arrow
    before:border-l-arrow
    before:top-8
    before:border-l-outerBubble
    before:border-t-transparent
    before:border-b-transparent
    before:content-['']
    max-sm:hidden
  "
    >
      I heard having friends is nice. But I wouldnt know because i dont have any
    </section>
  );
};

export { ChatBubble };
