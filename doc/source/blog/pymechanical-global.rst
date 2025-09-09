.. meta::
   :author: Unknown
   :date: 2025-08-26
   :categories: release
   :tags: mechanical, python
   :industries: Mechanical, CAD
   :products: PyMechanical
   :image: thumbnails/pymechanical.png
   :title: Globals parameter in the embedded app
   :description: whats new with globals parameter in the embedded app

Globals parameter in the embedded app
======================================

The ``globals`` parameter of the `App <api/ansys/mechanical/core/embedding/app/App.html>`_
class is used to update the global variables. This parameter is optional and interchangeable
with `app.update_globals(globals()) <api/ansys/mechanical/core/embedding/app/App.html#App.update_globals>`_.
To exclude enums from the global variables, use ``app.update_globals(globals(), False)``.
See the `globals <user_guide_embedding/globals.html>`_ page for more information.

Using the ``globals`` parameter:

.. code:: python

    from ansys.mechanical.core import App

    # Initialize the app and update globals
    app = App(globals=globals())

Using the ``update_globals`` method:

.. code:: python

    from ansys.mechanical.core import App

    # Initialize the app and update globals
    app = App()
    app.update_globals(globals())

Using the ``update_globals`` method excluding enums from global variables:

.. code:: python

    from ansys.mechanical.core import App

    # Initialize the app and update globals
    app = App()
    app.update_globals(globals(), False)