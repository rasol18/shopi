import { XCircleIcon } from '@heroicons/react/solid';
const Alert = ({ alert, handleClose }) => {
  //si hay una alerta cierra deforma automatica la app//
  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose;
    }, 9000);
  }
  //cuando la alerta esta activa retorna este mensaje//
  return (
    <>
      {alert?.active && (
        <div x-data className="bg-indigo-100 p-5 w-full rounded mb-8">
          <div className="flex space-x-3">
            <div className="flex-1 leading-tight text-sm text-black font-medium">{alert.message}</div>
            <button type="button">
              <XCircleIcon className="w-6 h-6 text-gray-600" onClick={handleClose} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
