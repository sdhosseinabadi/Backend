function Cards(props) {
  return (
    <div className="dark:bg-black bg-white shadow-lg rounded-lg  h-fit my-1 px-1 w-560px md:w-1/2 lg:my-4 lg:px-4 lg:w-2/5">
      <article className="overflow-hidden rounded-lg">
        <header className="flex items-center p-2 md:p-4">
          <h1 className="dark:text-white font-semibold text-3xl 1.875 rem 2.25 rem">
            {props.title}
          </h1>
        </header>
        <p className="dark:text-white text-grey-darker font-normal text-xl 1.25rem 1.75rem p-2 md:p-4">
          {props.content}
        </p>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            className="w-full"
            href={props.disabled?"#":props.link}
            target={props.disabled?"":"_blank"}
            rel="noreferrer"
          >
            {!props.disabled?(<button className="dark:text-black bg-gradient-to-b from-primary_orange-0 to-orange-600 hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-white w-full font-bold py-3 px-5 rounded mb-3">
              {props.btntext}
            </button>
            ):(
              <button className="dark:text-black bg-gradient-to-b from-slate-600 to-orange-400 text-white w-full font-bold py-3 px-5 rounded mb-3">
              {props.btntext}
            </button>
            )}
          </a>
        </footer>
      </article>
    </div>
  );
}

export default Cards;
