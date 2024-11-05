import {motion} from "framer-motion";
import jhaduvalichudail from "../../assets/Images/vx4yc5mn8s85j6pfnvyp17pn9qer.png"

interface ProgressBarProps {
  progress: number; 
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full h-3 bg-gray-900 rounded-full flex  mx-auto relative mt-auto">
      <div
        className="bg-green-500 h-full rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
      <motion.img
          src={jhaduvalichudail}
          alt="jhaduvalichudail"
          height={50}
          width={50}
          className="relative top-0 -left-10 h-14 w-14 animate-bounce"
        />
    </div>
  );
};

export default ProgressBar;
