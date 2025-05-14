Blog
####

The PyAnsys blog is a collection of articles and tutorials from the PyAnsys team and community. 
It covers a wide range of topics related to the PyAnsys ecosystem, keeps you up to date with the latest developments, 
and provides insights into how to use the various PyAnsys packages effectively.

.. raw:: html
    
    <div>
    {% for docname, meta in blog_posts.items() %}
      <div>
        <a href="{{ pathto(docname) }}">{{ meta.title or docname }}</a>
        <p>{{ meta.author or "Unknown" }} • {{ meta.date or "Unknown date" }}</p>
      </div>
    {% endfor %}
    </div>


.. toctree::
    :maxdepth: 2
    :hidden:

    blog/blog1

