import EatStraw from '@/components/eatStraw';
import style from '../styles/page.module.css'

export default function Home () {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <main className="text-center">

        {/** Componete que retorna um arquivo html */}
        <EatStraw />
        <p className={style.paragrafo}>extencionista <span className={style.spans}>2.0</span></p>

      </main>
    </div>
  );
};
