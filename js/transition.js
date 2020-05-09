import Highway from "@dogstudio/highway";
import { TimelineLite } from "gsap";

class Fade extends Highway.Transition {
  in(from, to, done) {
    const t1 = new TimelineLite();
    t1.fromTo(to, 0.5, { left: "-100%", top: "50%" }, { left: "0%" });
  }
  out(from, done) {
    done();
  }
}
