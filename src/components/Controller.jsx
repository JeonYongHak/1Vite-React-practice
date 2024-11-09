const Controller = ({ onClickButton }) => {
  return (
    <>
      <div className="text-center font-semibold text-lg mb-4">
        Simple Counter
      </div>
      <div className="flex space-x-4 justify-center">
        <button
          onClick={() => onClickButton(-1)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md shadow-lg transform transition duration-300 hover:scale-110 border-4 border-red-700"
        >
          -1
        </button>
        <button
          onClick={() => onClickButton(-10)}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md shadow-lg transform transition duration-300 hover:scale-110 border-4 border-orange-700"
        >
          -10
        </button>
        <button
          onClick={() => onClickButton(-100)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md shadow-lg transform transition duration-300 hover:scale-110 border-4 border-yellow-700"
        >
          -100
        </button>
        <button
          onClick={() => onClickButton(100)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md shadow-lg transform transition duration-300 hover:scale-110 border-4 border-green-700"
        >
          +100
        </button>
        <button
          onClick={() => onClickButton(10)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-lg transform transition duration-300 hover:scale-110 border-4 border-blue-700"
        >
          +10
        </button>
        <button
          onClick={() => onClickButton(1)}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md shadow-lg transform transition duration-300 hover:scale-110 border-4 border-purple-700"
        >
          +1
        </button>
      </div>
    </>
  );
};

export default Controller;
