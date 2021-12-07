var express = require('express');
var router = express.Router();
var proyectosModel = require('../../models/proyectosModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroyer = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */
router.get('/', async function (req, res, next) {
  var proyectos = await proyectosModel.getProyectos();
  proyectos = proyectos.map(proyecto => {
    if (proyecto.img_id) {
      const imagen = cloudinary.image(proyecto.img_id, {
        width: 178,
        height: 100,
        crop: 'fill'
      });
      return {
        ...proyecto,
        imagen
      }
    } else {
      return {
        ...proyecto,
        imagen: ''
      }
    }
  });
  res.render('admin/proyectos', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    proyectos
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

router.post('/agregar', async (req, res, next) => {
  try {
    var img_id = '';
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }
    if (req.body.proyecto != "" && req.body.direccion_web != "" && req.body.detalle != "") {
      await proyectosModel.insertProyecto({
        ...req.body,
        img_id
      });
      res.redirect('/admin/proyectos');
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error);
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargó el proyecto'
    })
  }
});

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  let proyecto = await proyectosModel.getProyectosById(id);
  if(proyecto.img_id){
    await (destroyer(proyecto.img_id));
  }
  await proyectosModel.deleteProyectosById(id);
  res.redirect('/admin/proyectos');
});

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);
  var proyecto = await proyectosModel.getProyectosById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    proyecto
  })
});

router.post('/modificar', async (req, res, next) => {
  try {
    let img_id = req.body.img_original;
    let borrar_img_vieja = false;
    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroyer(req.body.img_original));
    }
    var obj = {
      pagina: req.body.pagina,
      direccion_web: req.body.direccion_web,
      detalle: req.body.detalle,
      img_id
    }
    console.log(obj);
    await proyectosModel.modificarProyectoById(obj, req.body.id);
    res.redirect('/admin/proyectos');
  } catch (error) {
    console.log(error);
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó el proyecto'
    })
  }
});


module.exports = router;