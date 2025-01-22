About
#####

PyAnsys is a collection of Python libraries and tools developed by `ANSYS,
Inc.`_ It provides access to `Ansys products`_ by using a Python interface,
enabling users to perform engineering simulations, data processing, and
automation tasks.

To ease the installation of the libraries and tools, PyAnsys provides a
metapackage. Its goal is to simplify the installation process of the PyAnsys
ecosystem and ensure compatibility between its projects.

Key features of PyAnsys
=======================

PyAnsys shines in the following areas:

- **Automation of workflows:** PyAnsys enables users to automate repetitive or
  complex simulation tasks.

- **Integration with the Python ecosystem:** users can leverage the Python
  ecosystem.

- **Cross-product functionality:** PyAnsys provides Python APIs for various
  Ansys services and products. By allowing users to interact with multiple
  products in a single environment, PyAnsys enables users to streamline their
  workflows.

The PyAnsys ecosystem
=====================

PyAnsys libraries can be classified into wrappers and tools.

**Wrappers** are Python libraries that provide direct access to Ansys products.
Communication between the product and the library is performed via `gRPC
<grpc_>`_. Therefore, users can have the product installed remotely and connect
to that remote instance.

**Tools** are Python libraries that provide additional functionality to the
wrappers.
