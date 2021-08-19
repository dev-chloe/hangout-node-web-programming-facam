FROM mysql:5.7.34

# RUN mkdir /simple-crud
# RUN mkdir /simple-crud/data.mysql
# RUN mkdir /simple-crud/data.mysql/data
# RUN mkdir /simple-crud/data.mysql/share
# RUN chown mysql:mysql -R /simple-crud

COPY conf.d/* /etc/mysql/conf.d/.
ADD init-sql /docker-entrypoint-initdb.d

# Make the conf files not writeable so mysql will read them
# https://stackoverflow.com/questions/37001272/fixing-world-writable-mysql-error-in-docker
RUN chmod a-w /etc/mysql/conf.d/*

WORKDIR /
RUN ./entrypoint.sh
ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 3306 33060
CMD ["mysqld", "--default-authentication-plugin=mysql_native_password"]

# FINISH
ONBUILD RUN "Build 'mysql' process has done"