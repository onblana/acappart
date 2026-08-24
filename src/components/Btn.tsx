import { Button } from "@/components/ui/button";

interface BtnProps {
  name: string;
  onClick?: () => void;
}

const Btn = ({ name, onClick }: BtnProps) => {
  return (
    <Button
      onClick={onClick}
      className={`min-w-16 bg-slate-100 hover:bg-slate-200 active:bg-slate-300`}
    >
      {name}
    </Button>
  );
};

export default Btn;
