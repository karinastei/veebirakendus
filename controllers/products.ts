import { Request, Response, Router } from "express";
import { truncate } from "fs";
import Toode from "../models/Toode";

const router: Router = Router();

let toode: Toode | null = new Toode(1, "Koola", 1.5, true);

router.get("/toode", (req: Request, res: Response) =>  {
  res.send(toode)
});

router.get("/kustuta-toode", (req: Request, res: Response) =>  {
  toode = null;
  res.send(toode)
});

router.get("/kustuta-toode2", (req: Request, res: Response) =>  {
  toode = null;
  res.send("Edukalt kustutatud");
});

router.get("/suurenda-hinda", (req: Request, res: Response) =>  {
  if (toode !== null) {
    toode.price = toode.price + 1;
  }
  res.send(toode);
});

router.get("/aktiivsuse-muutmine", (req: Request, res: Response) =>  {
    if (toode?.isActive == true) {
        toode.isActive = !toode.isActive;
    }
    if (toode?.isActive == false) {
        toode.isActive = true;
    }
    res.send(toode);
  });

  router.get("/nime-muutmine", (req: Request, res: Response) =>  {
    if (toode) {
        toode.name = "Kapsas";
    }
    res.send(toode);
  });

export default router;