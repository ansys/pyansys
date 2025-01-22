About
#####

PyAnsys is an ecosystem of tools and libraries for interfacing with `Ansys`_
products.

PyAnsys is a collection of Python libraries and tools developed by `ANSYS, Inc.`_
that provides access to `Ansys products`_, enabling users to perform
engineering simulations, data processing, and automation tasks using Python.

Key feature of PyAnsys
======================

PyAnsys shines in the following areas:

- **Automation of workflows:** PyAnsys enables users to automate repetitive or
  complex simulation tasks.

- **Integration with the Python ecosystem:** users can leverage the Python
  ecosystem, including libraries like `NumPy`_, `SciPy`_, `Pandas`_, and
  `Matplotlib`_.

- **Cross-product functionality:** PyAnsys provides Python APIs for various
  Ansys services and products. By allowing users to interact with multiple
  products in a single environment, PyAnsys enables users to streamline their
  workflows.

The PyAnsys ecosystem
=====================

PyAnsys libraries can be classified into wrappers and tools.

Wrappers
--------

These are Python libraries that provide direct access to Ansys products.
Communication between the product and the library uses `gRPC <grpc_>`_.
Therefore, users can have the product installed remotely and connect to that
remote instance.

Tools
-----

These are Python libraries that provide additional functionality to the
wrappers.
