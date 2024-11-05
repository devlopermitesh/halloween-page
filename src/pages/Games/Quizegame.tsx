import React, { useEffect, useState } from 'react';
import quizeWallpaper from "../../assets/Images/1599d7107019725.5f9d3c7bae636.gif";
import Loading from '../Loading';
import Button from '../../componts/common/Button';
import Quizeprint from '../../componts/Gamecomponts/Quizeprint';

interface DataProps {
    id: number;
    question: string;
    options: string[];
    answer: string;
}

const Quizegame: React.FC = () => {
    const [gamestart, setgamestart] = useState<boolean>(false);
    const [currentquize, setcurrentquize] = useState<number>(0);
    const [loading, setLoading] = useState(true);
    const [data, setdata] = useState<DataProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../../../Halloweenquize.json');
                const fullData = await response.json();
                const quizzes = fullData?.quizzes?.slice(0, 10) || []; // Only fetch 10 items
                setdata(quizzes);

                setcurrentquize(Math.floor(Math.random() * quizzes.length));
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const Playgame = (): void => {
        alert("Game Started");
        setgamestart(true);
    };

    if (loading) {
        return (
            <div className='flex w-full h-full justify-center items-center bg-black opacity-50'>
                <Loading />
            </div>
        );
    }

    return (
        <section className="flex items-center justify-center w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${quizeWallpaper})` }}>
            <div className={`bg-black bg-opacity-50 p-6 rounded-lg text-center ${gamestart ? "hidden" : "block"}`}>
                <h2 className="text-white text-xl md:text-2xl mb-4 font-jaro font-bold">Open the door to enter the house.</h2>
                <p className="text-white text-sm md:text-base max-w-md mx-auto">
                    PS: This is not for the faint hearts. Keep the volume on for you may need your ears more than your eyes.
                </p>

                <Button 
                    name="Uh`Okay!" 
                    onclick={Playgame} 
                    className="bg-gray-800 border-white border-solid border mx-auto font-jaro mt-2 h-11 w-28 rounded-full text-lg" 
                    hoverClassName="bg-orange-600" 
                />
            </div>
            {
                gamestart && data[currentquize] && (
                    <Quizeprint
                        quizenum={currentquize + 1}
                        question={data[currentquize]?.question || "No question available"}
                        options={data[currentquize]?.options || []}
                        answer={data[currentquize]?.answer || ""}
                        setnext={() => {
                            if (currentquize >= data.length - 1) {
                                setcurrentquize(Math.floor(Math.random() * data.length));
                            } else {
                                setcurrentquize(currentquize + 1);
                            }
                        }}
                    />
                )
            }
        </section>
    );
};

export default Quizegame;
