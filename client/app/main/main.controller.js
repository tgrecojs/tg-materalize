angular.module('yoTgApp')
    .controller('MainCtrl', function($scope, $http, $firebaseObject) {
        $scope.awesomeThings = [];

        $http.get('/api/things').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });

        $scope.addThing = function() {
            if ($scope.newThing === '') {
                return;
            }
            $http.post('/api/things', {
                name: $scope.newThing
            });
            $scope.newThing = '';
        };

        $scope.deleteThing = function(thing) {
            $http.delete('/api/things/' + thing._id);
        };

        var ref = new Firebase("https://tgreco.firebaseio.com/days");
        var obj = $firebaseObject(ref);

        obj.$bindTo($scope, 'days');

        $scope.reset = function() {

            ref.set({
                monday: {
                    name: 'Monday',
                    slots: {
                        0900: {
                            time: '9:00am',
                            booked: false
                        },
                        1100: {
                            time: '11:00am',
                            booked: false
                        },
                        1300: {
                            time: '1:00pm',
                            booked: false
                        },
                        1400: {
                            time: '2:00pm',
                            booked: false
                        },
                        1500: {
                            time: '3:00pm',
                            booked: false
                        }
 
                    }
                },
                tuesday: {
                    name: 'Tuesday',
                    slots: {
                        0900: {
                            time: '9:00am',
                            booked: false
                        },
                        1100: {
                            time: '11:00am',
                            booked: false
                        },
                        1300: {
                            time: '1:00pm',
                            booked: false
                        },
                        1400: {
                            time: '2:00pm',
                            booked: false
                        },
                        1500: {
                            time: '3:00pm',
                            booked: false
                        }
 
                    }
                },
                wednesday: {
                    name: 'Wednesday',
                   slots: {
                        0900: {
                            time: '9:00am',
                            booked: false
                        },
                        1100: {
                            time: '11:00am',
                            booked: false
                        },
                        1300: {
                            time: '1:00pm',
                            booked: false
                        },
                        1400: {
                            time: '2:00pm',
                            booked: false
                        },
                        1500: {
                            time: '3:00pm',
                            booked: false
                        }
                    }
                },
                thursday: {
                    name: 'Thursday',
                    slots: {
                        0900: {
                            time: '9:00am',
                            booked: false
                        },
                        1100: {
                            time: '11:00am',
                            booked: false
                        },
                        1300: {
                            time: '1:00pm',
                            booked: false
                        },
                        1400: {
                            time: '2:00pm',
                            booked: false
                        },
                        1500: {
                            time: '3:00pm',
                            booked: false
                        }
                    }
                },
                friday: {
                    name: 'Friday',
                    slots: {
                        0900: {
                            time: '9:00am',
                            booked: false
                        },
                        1100: {
                            time: '11:00am',
                            booked: false
                        },
                        1300: {
                            time: '1:00pm',
                            booked: false
                        },
                        1400: {
                            time: '2:00pm',
                            booked: false
                        },
                        1500: {
                            time: '3:00pm',
                            booked: false
                        }
                    }
                },
                saturday: {
                    name: 'Saturday',
                    slots: {
                        0900: {
                            time: '9:00am',
                            booked: false
                        },
                        1100: {
                            time: '11:00am',
                            booked: false
                        },
                        1300: {
                            time: '1:00pm',
                            booked: false
                        },
                        1400: {
                            time: '2:00pm',
                            booked: false
                        },
                        1500: {
                            time: '3:00pm',
                            booked: false
                        }
                    }
                },
                sunday: {
                    name: 'Sunday',
                    slots: {
                        0900: {
                            time: '9:00am',
                            booked: false
                        },
                        1100: {
                            time: '11:00am',
                            booked: false
                        },
                        1300: {
                            time: '1:00pm',
                            booked: false
                        },
                        1400: {
                            time: '2:00pm',
                            booked: false
                        },
                        1500: {
                            time: '3:00pm',
                            booked: false
                        }
                    }
                }
            });

        };


    });