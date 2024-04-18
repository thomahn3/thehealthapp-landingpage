

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overscroll-none">
      {/* Banner at the top to display project is under development */}
      <div className="z-10 w-full max-w-5xl items-center place-content-center font-mono text-sm lg:flex">
          <p className="fixed top-0 left-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xls">
            Currently in development by&nbsp;
            <a href="https://github.com/thomahn3">
              <u>thomahn3</u>
              </a>
          </p>
      </div>
      <div className="text-xl">
        <h1 className="text-2xl">
          Fitenss One
        </h1>
      </div>

      <div>
        <input type="text" className="flex justify-center border-2 border-solid rounded-md border-gray-300 bg-zinc-200 backdrop-blur-2xl"/>
        <button></button>
      </div>
    </main>
  );
}
