.. meta::
   :author: Unknown
   :date: 2025-08-26
   :categories: release
   :tags: mechanical, python
   :industries: Mechanical, CAD
   :products: PyMechanical
   :image: thumbnails/pymechanical.png
   :title: Global parameter in the embedded app
   :description: what's new with global parameter in the embedded app

.. vale off

Global parameter in the embedded app
=====================================

The ``globals`` parameter of the `App`
class is used to update the global variables. This parameter is optional and interchangeable
with `app.update_globals(globals())`.
To exclude enums from the global variables, use ``app.update_globals(globals(), False)``.
See the `globals` page for more information.

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

Using the ``update_globals`` method excluding ``enums`` from global variables:

.. code:: python

    from ansys.mechanical.core import App

    # Initialize the app and update globals
    app = App()
    app.update_globals(globals(), False)

.. vale on