PyAnsys Project
===============

Welcome to the PyAnsys Project!

The PyAnsys project is a collection of Python packages to enable the
usage of Ansys products through Python.  As of now, these packages are
focused on MAPDL and post processing of MAPDL related files, but will
grow to encompass more products and features as the project develops
and matures.

This project originally began as a single package, ``pyansys``, and
has been expanded to four main packages and a few supporting packages.

.. note::
   To use PyAnsys you need to install the applicable packages for your
   product:

   MAPDL:

   - ``pip install ansys-mapdl-core``

   MAPDL Post-Processing:

   - ``pip install ansys-dpf-core``
   - ``pip install ansys-dpf-reader``
   - ``pip install ansys-mapdl-reader``


PyMAPDL
-------
The ``PyAnsys`` project supports Pythonic access to MAPDL to be able
to communicate with the MAPDL process directly from Python.  The
original ``PyAnsys`` project was limited to either the console or
CORBA interface, and the latest ``ansys-mapdl-core`` package enables a
more comprehensive interface with MAPDL and supports:

- All the features of the original module (e.g. pythonic commands,
  interactive sessions).
- Remote connections to MAPDL from anywhere via gRPC.
- Direct access to MAPDL arrays, meshes, and geometry as Python
  objects.
- Low level access to the MAPDL solver through APDL math in a
  ``scipy`` like interface.

Installation
~~~~~~~~~~~~
Install this package with:

.. code::

   pip install ansys-mapdl-core

Usage
~~~~~
Here's a brief example of how PyMAPDL works:

.. code:: python

    >>> from ansys.mapdl.core import launch_mapdl
    >>> mapdl = launch_mapdl()
    >>> print(mapdl)

    Product:             ANSYS Mechanical Enterprise
    MAPDL Version:       RELEASE  2021 R1           BUILD 21.0
    PyMAPDL Version:     Version: 0.57.0

MAPDL functions can be called directly from an ``Mapdl`` instance in a
pythonic manner.  This is to simplify calling MAPDL, especially when
inputs are variables within Python.  For example, the following two
commands are equivalent:

.. code:: python

    mapdl.k(1, 0, 0, 0)
    mapdl.run('K, 1, 0, 0, 0')

This approach takes care of the string formatting for you.  For
example, inputting points from a numpy array:

.. code:: python

   # make 10 random keypoints in ANSYS
   points = np.random.random((10, 3))
   for i, (x, y, z) in enumerate(points):
       mapdl.k(i + 1, x, y, z)

For more details, see:

  - `PyMAPDL Documentation <https://mapdldocs.pyansys.com/>`_
  - `PyMAPDL PyPi <https://pypi.org/project/ansys-mapdl-core/>`_
  - `PyMAPDL GitHub <https://github.com/pyansys/pymapdl/>`_


DPF-Core
--------
.. note::
    DPF-Core is available for Ansys 2021R1 and newer.

The Data Processing Framework (DPF) is designed to provide numerical
simulation users/engineers with a toolbox for accessing and
transforming simulation data. DPF can access data from solver result
files as well as several neutral formats (csv, hdf5, vtk,
etc.). Various operators are available allowing the manipulation and
the transformation of this data.

DPF is a workflow-based framework which allows simple and/or complex
evaluations by chaining operators. The data in DPF is defined based on
physics agnostic mathematical quantities described in a
self-sufficient entity called field. This allows DPF to be a modular
and easy to use tool with a large range of capabilities. It's a
product designed to handle large amount of data.

The Python ``ansys.dpf.core`` module provides a Python interface to
the powerful DPF framework enabling rapid post-processing of a variety
of Ansys file formats and physics solutions without ever leaving a
Python environment.

Installation
~~~~~~~~~~~~

Install this repository with:

```
pip install ansys-dpf-core
```


Usage
~~~~~
Provided you have Ansys 2021R1 installed, a DPF server will start
automatically once you start using DPF from python.

Opening a result file generated from Ansys workbench or MAPDL is as easy as:

.. code:: python

    >>> from ansys.dpf.core import Model
    >>> model = Model('file.rst')
    >>> print(model)
    DPF Model
    ------------------------------
    Static analysis
    Unit system: Metric (m, kg, N, s, V, A)
    Physics Type: Mecanic
    Available results:
         -  displacement
         -  element_nodal_forces
         -  volume
         -  energy_stiffness_matrix
         -  hourglass_energy
         -  thermal_dissipation_energy
         -  kinetic_energy
         -  co_energy
         -  incremental_energy
         -  temperature

More Resources
~~~~~~~~~~~~~~
For more details, see:

  - `DPF-Core Documentation <https://dpfdocs.pyansys.com/>`_
  - `DPF-Core PyPi <https://pypi.org/project/ansys-dpf-core/>`_
  - `DPF-Core GitHub <https://github.com/pyansys/DPF-Core>`_


DPF-Post
--------
.. note::
    DPF-Post is available for Ansys 2021R1 and newer.

The Data Processing Framework (DPF) is designed to provide numerical
simulation users/engineers with a toolbox for accessing and
transforming simulation data. DPF can access data from solver result
files as well as several neutral formats (csv, hdf5, vtk,
etc.). Various operators are available allowing the manipulation and
the transformation of this data.

The Python `ansys.dpf.post` package provides an simplified Python
interface to DPF, thus enabling rapid post-processing without
leaving a Python environment. 

This module leverages the DPF-Core project's ``ansys.dpf.core``
package, which can be used to build more advanced and customized
workflows using Ansys's DPF.


Installation
~~~~~~~~~~~~
Install this repository with:

.. code::

    pip install ansys-dpf-post


Example Usage
~~~~~~~~~~~~~
Provided you have ANSYS 2021R1 installed, a DPF server will start
automatically once you start using DPF-Post.  Should you wish to use
DPF-Post without 2020R1, see the `DPF Docker Documentation
<https://dpfdocs.pyansys.com/getting_started/docker.html>`_.

Opening and plotting a result file generated from Ansys workbench or
MAPDL is as easy as:

.. code::

    >>> from ansys.dpf import post
    >>> from ansys.dpf.post import examples
    >>> solution = post.load_solution(examples.multishells_rst)
    >>> stress = solution.stress()
    >>> stress.xx.plot_contour(show_edges=False)

.. figure:: https://github.com/pyansys/dpf-post/raw/master/docs/source/images/main_example.png
    :width: 400pt

    Example Stress Plot

Or extract the raw data as a `numpy` array with:

.. code:: python

    >>> stress.xx.get_data_at_field(0)
    array([-3.37871094e+10, -4.42471752e+10, -4.13249463e+10, ...,
            3.66408342e+10,  1.40736914e+11,  1.38633557e+11])


Legacy PyMAPDL Reader
---------------------
This is the legacy module for reading in binary and ASCII files
generated from MAPDL.

This Python module allows you to extract data directly from binary
ANSYS v14.5+ files and to display or animate them rapidly using a
straightforward API coupled with C libraries based on header files
provided by ANSYS.

The ``ansys-mapdl-reader`` module supports the following formats:

  - ``*.rst`` - Structural analysis result file
  - ``*.rth`` - Thermal analysis result file 
  - ``*.emat`` - Element matrix data file
  - ``*.full`` - Full stiffness-mass matrix file
  - ``*.cdb`` or ``*.dat`` - MAPDL ASCII block archive and
    Mechanical Workbench input files

Please see the `PyMAPDL-Reader Documentation
<https://readerdocs.pyansys.com>`_ for the full documentation.

.. note::

   This module will likely change or be depreciated in the future.

   You are encouraged to use the new Data Processing Framework (DPF)
   modules at `DPF-Core <https://github.com/pyansys/DPF-Core>`_ and
   `DPF-Post <https://github.com/pyansys/DPF-Post>`_ as they provide a
   modern interface to ANSYS result files using a client/server
   interface using the same software used within ANSYS Workbench, but
   via a Python client.

Loading and Plotting an ANSYS Archive File
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
ANSYS archive files containing solid elements (both legacy and
modern), can be loaded using Archive and then converted to a vtk
object.

.. code:: python

    from ansys.mapdl import reader as pymapdl_reader
    from ansys.mapdl.reader import examples
    
    # Sample *.cdb
    filename = examples.hexarchivefile
    
    # Read ansys archive file
    archive = pyansys.Archive(filename)
    
    # Print raw data from cdb
    for key in archive.raw:
       print("%s : %s" % (key, archive.raw[key]))
    
    # Create a vtk unstructured grid from the raw data and plot it
    grid = archive.parse_vtk(force_linear=True)
    grid.plot(color='w', show_edges=True)
    
    # write this as a vtk xml file 
    grid.save('hex.vtu')

    # or as a vtk binary
    grid.save('hex.vtk')


.. figure:: https://github.com/pyansys/pymapdl-reader/raw/master/docs/source/images/hexbeam_small.png
   :alt: Hexahedral beam

You can then load this vtk file using ``pyvista`` or another program that uses VTK.
    
.. code:: python

    # Load this from vtk
    import pyvista as pv
    grid = pv.UnstructuredGrid('hex.vtu')
    grid.plot()


Loading the Result File
~~~~~~~~~~~~~~~~~~~~~~~
This example reads in binary results from a modal analysis of a beam
from ANSYS.

.. code:: python

    # Load the reader from pyansys
    from ansys.mapdl import reader as pymapdl_reader
    from ansys.mapdl.reader import examples
    
    # Sample result file
    rstfile = examples.rstfile
    
    # Create result object by loading the result file
    result = pyansys.read_binary(rstfile)
    
    # Beam natural frequencies
    freqs = result.time_values

.. code:: python

    >>> print(freq)
    [ 7366.49503969  7366.49503969 11504.89523664 17285.70459456
      17285.70459457 20137.19299035]
    
Get the 1st bending mode shape.  Results are ordered based on the
sorted node numbering.  Note that results are zero indexed

.. code:: python

    >>> nnum, disp = result.nodal_solution(0)
    >>> print(disp)
    [[ 2.89623914e+01 -2.82480489e+01 -3.09226692e-01]
     [ 2.89489249e+01 -2.82342416e+01  2.47536161e+01]
     [ 2.89177130e+01 -2.82745126e+01  6.05151053e+00]
     [ 2.88715048e+01 -2.82764960e+01  1.22913304e+01]
     [ 2.89221536e+01 -2.82479511e+01  1.84965333e+01]
     [ 2.89623914e+01 -2.82480489e+01  3.09226692e-01]
     ...


Plotting Nodal Results
~~~~~~~~~~~~~~~~~~~~~~
As the geometry of the model is contained within the result file, you
can plot the result without having to load any additional geometry.
Below, displacement for the first mode of the modal analysis beam is
plotted using ``VTK``.

.. code:: python
    
    # Plot the displacement of Mode 0 in the x direction
    result.plot_nodal_solution(0, 'x', label='Displacement')

.. figure:: https://github.com/pyansys/pymapdl-reader/raw/master/docs/source/images/hexbeam_disp_small.png


Results can be plotted non-interactively and screenshots saved by
setting up the camera and saving the result.  This can help with the
visualization and post-processing of a batch result.

First, get the camera position from an interactive plot:

.. code:: python

    >>> cpos = result.plot_nodal_solution(0)
    >>> print(cpos)
    [(5.2722879880979345, 4.308737919176047, 10.467694436036483),
     (0.5, 0.5, 2.5),
     (-0.2565529433509593, 0.9227952809887077, -0.28745339908049733)]

Then generate the plot:

.. code:: python

    result.plot_nodal_solution(0, 'x', label='Displacement', cpos=cpos,
                               screenshot='hexbeam_disp.png',
                               window_size=[800, 600], interactive=False)

Stress can be plotted as well using the below code.  The nodal stress
is computed in the same manner that ANSYS uses by to determine the
stress at each node by averaging the stress evaluated at that node for
all attached elements.  For now, only component stresses can be
displayed.

.. code:: python
    
    # Display node averaged stress in x direction for result 6
    result.plot_nodal_stress(5, 'Sx')

.. figure:: https://github.com/pyansys/pymapdl-reader/raw/master/docs/source/images/beam_stress_small.png


Nodal stress can also be generated non-interactively with:

.. code:: python

    result.plot_nodal_stress(5, 'Sx', cpos=cpos, screenshot=beam_stress.png,
                           window_size=[800, 600], interactive=False)

Installation
------------
Installation through pip::

    pip install ansys-mapdl-reader

You can also visit `pymapdl-reader <https://github.com/pyansys/pymapdl-reader>`_
to download the source or releases from GitHub.


License and Acknowledgments
---------------------------
All the PyAnsys modules are licensed under the MIT license.

These aforementioned Python modules, make no commercial claim over Ansys
whatsoever.  These tools extend the functionality of Ansys products by
adding a Python interfaces to legally obtained software products
without changing the core behavior or license of the original
software.  

To get a copy of Ansys, please visit `Ansys <https://www.ansys.com/>`_.
