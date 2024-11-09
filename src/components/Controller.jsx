const Controller = ({ onClickButton }) => {
  return (
    <>
      <div className="mb-4 text-lg font-semibold text-center">
        Simple Counter
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => onClickButton(-1)}
          className="px-4 py-2 font-bold text-white transition duration-300 transform bg-red-500 border-4 border-red-700 rounded-md shadow-lg hover:bg-red-600 hover:scale-110"
        >
          -1
        </button>
        <button
          onClick={() => onClickButton(-10)}
          className="px-4 py-2 font-bold text-white transition duration-300 transform bg-orange-500 border-4 border-orange-700 rounded-md shadow-lg hover:bg-orange-600 hover:scale-110"
        >
          -10
        </button>
        <button
          onClick={() => onClickButton(-100)}
          className="px-4 py-2 font-bold text-white transition duration-300 transform bg-yellow-500 border-4 border-yellow-700 rounded-md shadow-lg hover:bg-yellow-600 hover:scale-110"
        >
          -100
        </button>
        <button
          onClick={() => onClickButton(100)}
          className="px-4 py-2 font-bold text-white transition duration-300 transform bg-green-500 border-4 border-green-700 rounded-md shadow-lg hover:bg-green-600 hover:scale-110"
        >
          +100
        </button>
        <button
          onClick={() => onClickButton(10)}
          className="px-4 py-2 font-bold text-white transition duration-300 transform bg-blue-500 border-4 border-blue-700 rounded-md shadow-lg hover:bg-blue-600 hover:scale-110"
        >
          +10
        </button>
        <button
          onClick={() => onClickButton(1)}
          className="px-4 py-2 font-bold text-white transition duration-300 transform bg-purple-500 border-4 border-purple-700 rounded-md shadow-lg hover:bg-purple-600 hover:scale-110"
        >
          +1
        </button>
        <button
          onClick={() => {
            onClickButton(0);
          }}
          className="px-4 py-2 font-bold text-white border-4 border-black rounded-md shadow-lg hover: shad bg-sky-400"
        >
          리셋
        </button>
      </div>
    </>
  );
};

export default Controller;
