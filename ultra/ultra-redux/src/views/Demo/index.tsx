import type { RootState } from "~/stores/index.ts";
import { useDispatch, useSelector } from "react-redux";
export default function Page() {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div>
      Demo page<br />
      <div>跨页面{count}查看状态</div>
    </div>
  );
}
