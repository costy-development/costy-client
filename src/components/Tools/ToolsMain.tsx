import circularNav from "@/lib/circular-nav";
import { useSearchParams } from "@/hooks/utils";

import { CircularNav } from "@/components/Layouts";

const Tools: React.FC = () => {
  const { getParam } = useSearchParams();
  const sub = getParam("sub");

  const isValidSubNav = sub && circularNav.costy_tools.sub[sub];

  return (
    <div>
      <CircularNav
        parent={circularNav.costy_tools.main}
        sub={isValidSubNav ? circularNav.costy_tools.sub[sub] : []}
      />
    </div>
  );
};

export default Tools;
