import express from "express";
import items from "./data";

const router = express.Router();


/**
 * @openapi
 * /api/v1/Catalog/items:
 *   get:
 *     tags: 
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/api/v1/Catalog/items", function (req, res) {
	setTimeout(()=> {
		res.status(200).json(items)
	}, 1000)//simulate long db call
});

/**
 * @openapi
 * /api/v1/Catalog/items:
 *   put:
 *     tags: 
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
 router.put("/", function (req, res) {
	res.status(200).json("hello world");
});

/**
 * @openapi
 * /api/v1/Catalog/items:
 *   post:
 *     tags: 
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
 router.post("/", function (req, res) {
	res.status(200).json("hello world");
});

/**
 * @openapi
 * /api/v1/Catalog/items/{id}:
 *   get:
 *     tags: 
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
 router.get("/:id", function (req, res) {
	res.status(200).json("hello world");
});

/**
 * @openapi
 * /api/v1/Catalog/items/withname/{name}:
 *   get:
 *     tags: 
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
 router.get("/withname/:name", function (req, res) {
	res.status(200).json("hello world");
});

/**
 * @openapi
 * /api/v1/Catalog/items/type/{catalogTypeId}/brand/{catalogBrandId}:
 *   get:
 *     tags: 
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
 router.get("/withname/:id", function (req, res) {
	res.status(200).json("hello world");
});

/**
 * @openapi
 * /api/v1/Catalog/items/type/all/brand/{catalogBrandId}:
 *   get:
 *     tags: 
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
 router.get("/withname/:id", function (req, res) {
	res.status(200).json("hello world");
});

/**
 * @openapi
 * /api/v1/Catalog/catalogtypes:
 *   get:
 *     tags: 
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
 router.get("/withname/:id", function (req, res) {
	res.status(200).json("hello world");
});

/**
 * @openapi
 * /api/v1/Catalog/catalogbrands:
 *   get:
 *     tags: 
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
 router.get("/withname/:id", function (req, res) {
	res.status(200).json("hello world");
});

/**
 * @openapi
 * /api/v1/Catalog/{id}:
 *   delete:
 *     tags: 
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
 router.get("/withname/:id", function (req, res) {
	res.status(200).json("hello world");
});

router.get("/:id", function (req, res) {
	res.status(200).json("hello world");

});

router.post("/", function (req, res) {
	res.status(200).json("hello world");

});

router.put("/:id", function (req, res) {
	res.status(200).json("hello world");

});

router.delete("/:id", function (req, res) {
	res.status(200).json("hello world");

});

export default router;