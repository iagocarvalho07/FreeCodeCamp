import { Router } from "express";
import * as PageController from '../controllers/pageController';
import * as searchController from '../controllers/searchController';


const router = Router();

router.get('/', PageController.home);
router.get('/gods', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fish', PageController.fish);

router.get('/search', searchController.search);



export default router;