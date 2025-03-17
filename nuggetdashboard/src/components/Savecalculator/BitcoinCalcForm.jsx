import { useState } from "react";
import { useDispatch } from "react-redux";
import { bitcoinGrowth } from "../../store/bitcoinSlice";

function BitCoinCalcForm() {
  const dispatch = useDispatch();
  const [startbelopp, setStartbelopp] = useState(10000);
  const [månadsinsättning, setMånadsinsättning] = useState(1000);
  const [år, setÅr] = useState(1);
  const [mål, setMål] = useState(""); // Ny state för mål
  const [modalVisible, setModalVisible] = useState(false); // State för modalen
  const årligAvkastning = 30;

  const beräknaFramtidaVärde = (startbelopp, månadsinsättning, år, årligAvkastning) => {
    const r = årligAvkastning / 100 / 12; 
    const n = år * 12;

    const framtidaVärde =
      startbelopp * Math.pow(1 + r, n) +
      månadsinsättning * ((Math.pow(1 + r, n) - 1) / r);

    return framtidaVärde;
  };

  const bitcoinFramtidaVärde = beräknaFramtidaVärde(
    startbelopp,
    månadsinsättning,
    år,
    årligAvkastning
  );

  const hanteraSpara = () => {
    const formateratVärde = Math.round(bitcoinFramtidaVärde);
    const värdenObjekt = {
        id: Date.now(),
        framtidaVärde: formateratVärde,
        startbelopp: startbelopp,
        månadsinsättning: månadsinsättning,
        år: år,
        mål: mål,
    };
    dispatch(bitcoinGrowth(värdenObjekt));
    setModalVisible(true); // Visa modalen efter sparande
  };

  const stängModal = () => {
    setModalVisible(false); // Stäng modalen
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center mt-5 mb-5">
      <div className="flex justify-center items-center mb-4">
        <div className="text-gray-800 text-lg font-bold px-4 py-2 rounded-lg">
          Beräkna din framtida avkastning
        </div>
      </div>
      <h5 className="text-3xl font-bold text-green-600">
        {Math.round(bitcoinFramtidaVärde).toLocaleString()} SEK
      </h5>
      <p className="text-gray-500 text-sm mb-4">
        Varav
        {Math.round(
          bitcoinFramtidaVärde - (startbelopp + månadsinsättning * år * 12)
        ).toLocaleString()}{" "}
        SEK är avkastningen.
      </p>

      <form className="space-y-4 mt-4">
        <div className="bg-gray-100 p-3 rounded-lg">
          <label className="text-sm font-medium text-gray-700">
            Månadsbesparing: {månadsinsättning} SEK
          </label>
          <input
            type="range"
            min="100"
            max="1500"
            step="50"
            value={månadsinsättning}
            onChange={(e) => setMånadsinsättning(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <label className="text-sm font-medium text-gray-700">
            Startbelopp: {startbelopp} SEK
          </label>
          <input
            type="range"
            min="0"
            max="100000"
            step="500"
            value={startbelopp}
            onChange={(e) => setStartbelopp(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <label className="text-sm font-medium text-gray-700">
            Sparperiod: {år} År
          </label>
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={år}
            onChange={(e) => setÅr(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <label className="text-sm font-medium text-gray-700">
            Mål: 
          </label>
          <input
            type="text"
            value={mål}
            onChange={(e) => setMål(e.target.value)}
            className="w-full mt-2 border border-gray-300 p-2 rounded-lg"
            placeholder="Skriv ditt mål, t.ex. bil eller bostad"
          />
        </div>
      </form>
      
      <button
        onClick={hanteraSpara}
        className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 rounded-lg mt-3"
      >
        Spara Värden
      </button>

      <p className="text-xs text-gray-500 mt-4">
        *Vi har beräknat att du kommer att få en årlig ökning på 30% per år.
      </p>

      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">Sparande tillagt!</h2>
            <p className="mt-2">Ditt sparande har lagts till framgångsrikt.</p>
            <button
              onClick={stängModal}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Stäng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BitCoinCalcForm;