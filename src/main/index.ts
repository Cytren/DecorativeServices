
import "reflect-metadata";

import {Injectable} from "./decorator/injectable";
import {Inject} from "./decorator/inject";
import {ServiceProvider} from "./service/provider";
import {registerProvider, getService} from "./service/injector";

export {
    Injectable, Inject, ServiceProvider,
    registerProvider, getService,
};
